import { TodoProvider } from "./context/TodoContext";
import { ThemeProvider } from "./Context/ThemeContext";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoLIst";

function App() {
  return (
    <ThemeProvider>
    <TodoProvider>
      <h1>Todo App</h1>
      <AddTodo />
      <TodoList />
    </TodoProvider>
    </ThemeProvider>
  );
}

export default App;