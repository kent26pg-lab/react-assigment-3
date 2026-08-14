import { useTodo } from "../context/TodoContext";
import styles from "./TodoList.module.css";

function TodoList() {
  const { todos, toggleTodo, removeTodo } = useTodo();

  return (
    <section className={styles.card}>
      <h2 className={styles.title}>Todoer</h2>

      {todos.length === 0 ? (
        <p className={styles.empty}>
          Ingen todoer ennå.
        </p>
      ) : (
        <ul className={styles.list}>
          {todos.map((todo) => (
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