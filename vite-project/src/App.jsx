import { TodoProvider } from "./context/TodoContext";
import { ThemeProvider } from "./context/ThemeContext";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import ThemeSwitcher from "./components/ThemeSwitcher";

import styles from "./App.module.css";

function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <h1>Todo App</h1>

        <ThemeSwitcher />

        <AddTodo />

        <TodoList />
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;