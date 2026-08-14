import { useState } from "react";
import { useTodo } from "../context/TodoContext";

import styles from "./AddTodo.module.css";

function AddTodo() {
  const [text, setText] = useState("");

  const { addTodo } = useTodo();

  function handleAddTodo() {
    if (text.trim() === "") {
      alert("Du må skrive inn en todo!");
      return;
    }

    addTodo(text);
    setText("");
  }

  return (
    <section className={styles.card}>
      <input
        className={styles.input}
        type="text"
        placeholder="Skriv en todo..."
        value={text}
        onChange={(event) => setText(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleAddTodo();
          }
        }}
      />

      <button
        className={styles.button}
        onClick={handleAddTodo}
      >
        Legg til
      </button>
    </section>
  );
}

export default AddTodo;