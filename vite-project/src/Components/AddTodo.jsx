import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function AddTodo() {
  const [text, setText] = useState("");

  const { addTodo } = useTodo();

  function handleAddTodo() {
    addTodo(text);
    setText("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Skriv en todo..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <button onClick={handleAddTodo}>
        Legg til
      </button>
    </div>
  );
}

export default AddTodo;