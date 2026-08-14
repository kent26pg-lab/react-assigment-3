import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <h1>Todo App</h1>
    </TodoProvider>
  );
}

export default App;