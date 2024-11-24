import React from "react";
import clsx from "clsx";
import { Todo } from "../../types";
import styles from "./TodoItem.module.css";

interface Props {
  todo: Todo;
  onDelete: (id: number) => void;
  onToggleComplete: (id: number) => void;
}

export const TodoItem: React.FC<Props> = ({ todo, onDelete, onToggleComplete }) => {
  const handleToggleComplete = () => {
    onToggleComplete(todo.id);
  };
  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <li className={clsx(styles.todoItem, { [styles.completed]: todo.completed })}>
      <input type="checkbox" checked={todo.completed} onChange={handleToggleComplete} />
      <span className={clsx(styles.todoTitle, { [styles.completed]: todo.completed })}>{todo.text}</span>
      <button className={styles.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};
