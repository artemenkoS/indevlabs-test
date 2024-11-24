import React, { useEffect, useState } from "react";
import { AddTodoItem } from "./components/AddTodoItem/AddTodoItem.tsx";
import { TodoList } from "./components/TodoList/TodoList";
import { loadFromStorage, saveToStorage } from "./utils/localstorageUtils";
import styles from "./App.module.css";
import { TODOS_KEY } from "./const.ts";
import { Todo } from "./types.ts";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => loadFromStorage<Todo[]>(TODOS_KEY) || []);

  useEffect(() => {
    saveToStorage(TODOS_KEY, todos);
  }, [todos]);

  const handleAddTodo = (text: string): void => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const handleDeleteTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleComplete = (id: number): void => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.heading}>To-Do List</h1>
      <AddTodoItem onAdd={handleAddTodo} />
      <TodoList todos={todos} onDelete={handleDeleteTodo} onToggleComplete={handleToggleComplete} />
    </div>
  );
};

export default App;
