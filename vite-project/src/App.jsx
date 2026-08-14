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
        <main className={styles.app}>
          <div className={styles.container}>
            <h1 className={styles.title}>
              Test
            </h1>

            <ThemeSwitcher />

            <AddTodo />

            <TodoList />
          </div>
        </main>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;