import React, { useState } from "react";

const TodoList = () => {
  const [taches, setTaches] = useState(["Javascript", "C#", "Java"]);
  const [description, setDescription] = useState('');

  const clearall = () => {
    setTaches([]);
  };

  const remove = (position) => {
    let newtaches = taches.filter((item, index) => index!== position);
    setTaches(newtaches);
  };

  const add = () => {
    setTaches([...taches, description]);
  }
  return (
    <div>
        <h1>Todo List</h1>
        <div>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            <button onClick={add}>Add</button>
        </div>
      <div className="list">
        {taches.map((tache, index) => (
          <div className="tache" key={index}>
            <p>{tache}</p>
            <button onClick={() => remove(index)}>Remove</button>
          </div>
        ))}
      </div>
      <button onClick={clearall}>Clear All</button>
    </div>
  );
};

export default TodoList;
