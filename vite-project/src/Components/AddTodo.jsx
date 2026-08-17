import { useState } from "react";
import { useTodo } from "../context/TodoContext";

import styles from "./AddTodo.module.css";

function AddTodo() {
  const [text, setText] = useState("");

  const { addTodo } = useTodo();

  function handleAddTodo() {
    if (text.trim() === "") {
      alert("Please enter a task.");
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
        placeholder="Add a task..."
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
        Add
      </button>
    </section>
  );
}

export default AddTodo;