import { useState } from "react";
import { useTodo } from "../context/TodoContext";
import CompletedTasksToggle from "./CompletedTasksToggle";

import styles from "./TodoList.module.css";

function TodoList() {
  const { todos, toggleTodo, removeTodo } = useTodo();

  const [showCompleted, setShowCompleted] = useState(true);

  const visibleTodos = todos.filter(
    (todo) => showCompleted || !todo.done
  );

  return (
    <section className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>Tasks</h2>

        <CompletedTasksToggle
          showCompleted={showCompleted}
          onToggle={() => setShowCompleted((prev) => !prev)}
        />
      </div>

      {visibleTodos.length === 0 ? (
        <p className={styles.empty}>
          {todos.length === 0
            ? "No tasks yet."
            : "No active Task."}
        </p>
      ) : (
        <ul className={styles.list}>
          {visibleTodos.map((todo) => (
            <li className={styles.todo} key={todo.id}>
              <input
                className={styles.checkbox}
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleTodo(todo.id)}
              />

              <span
                className={`${styles.text} ${
                  todo.done ? styles.done : ""
                }`}
              >
                {todo.text}
              </span>

              <button
                className={styles.removeButton}
                onClick={() => removeTodo(todo.id)}
                type="button"
              >
                X
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default TodoList;