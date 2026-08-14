import { useTodo } from "../context/TodoContext";

function TodoList() {
  const { todos, toggleTodo, removeTodo } = useTodo();

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => toggleTodo(todo.id)}
          />

          <span>{todo.text}</span>

          <button onClick={() => removeTodo(todo.id)}>
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;