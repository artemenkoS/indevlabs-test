import React, { ChangeEvent, useState } from "react";
import styles from "./AddTodoItem.module.css";

interface AddTodoProps {
  onAdd: (text: string) => void;
}

export const AddTodoItem: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSetNewTodo = (e: ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value);
  const handleAdd = () => {
    if (newTodo.trim()) {
      onAdd(newTodo.trim());
      setNewTodo("");
    }
  };

  return (
    <div className={styles.addTodoContainer}>
      <input
        className={styles.input}
        type="text"
        value={newTodo}
        onChange={handleSetNewTodo}
        placeholder="Add a new task"
      />
      <button className={styles.button} onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};
