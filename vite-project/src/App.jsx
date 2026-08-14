import { TodoProvider } from "./context/TodoContext";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoLIst";

function App() {
  return (
    <TodoProvider>
      <h1>Todo App</h1>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
}

export default App;