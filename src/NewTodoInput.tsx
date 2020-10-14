import React, { ChangeEvent } from "react";
import './App.css'

interface NewTodoInputProps {
  addTodo(todo: string): void;
}

export const NewTodoInput: React.FC<NewTodoInputProps> = ({ addTodo }) => {
  const [todo, setNote] = React.useState("");

  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const onAddNoteClick = () => {
    if(todo.length <= 0){
      alert('enter a todo...')
      return
    }
    addTodo(todo);
    setNote("");
  };

  return (
    <div>
      <input
        onChange={updateNote}
        value={todo}
        type="text"
        name="note"
        placeholder="Add a Note"
      />
      <button className='addButton' onClick={onAddNoteClick}>Add Note</button>
    </div>
  );
};
