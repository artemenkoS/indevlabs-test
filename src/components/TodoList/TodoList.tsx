import React from "react";
import { TodoItem } from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface Props {
  todos: Todo[];
  onDelete: (id: number) => void;
  onToggleComplete: (id: number) => void;
}

export const TodoList: React.FC<Props> = ({ todos, onDelete, onToggleComplete }) => {
  return (
    <>
      {todos.length === 0 ? (
        <p className={styles.emptyMessage}>No tasks to display</p>
      ) : (
        <ul className={styles.todoList}>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onToggleComplete={onToggleComplete} />
          ))}
        </ul>
      )}
    </>
  );
};
