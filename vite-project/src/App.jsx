import { TodoProvider } from "./context/TodoContext";
import AddTodo from "./Components/AddTodo";

function App() {
  return (
    <TodoProvider>
      <h1>Todo App</h1>
      <AddTodo />
    </TodoProvider>
  );
}

export default App;