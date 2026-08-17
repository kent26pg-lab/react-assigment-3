import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext();

const STORAGE_KEY = "todos";

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem(STORAGE_KEY);

    if (!savedTodos) {
      return [];
    }

    try {
      return JSON.parse(savedTodos);
    } catch (error) {
      console.error("Kunne ikke lese todoer fra localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      done: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, done: !todo.done }
          : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id)
    );
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        removeTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error(
      "useTodo må brukes inne i en TodoProvider"
    );
  }

  return context;
}