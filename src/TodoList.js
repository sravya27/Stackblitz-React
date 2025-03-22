import React, { useState } from "react";

const TodoList = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [text, setText] = useState(""); 

  const addItem = () => {
    if (text.trim() === "") return; 
    setTodoItems([...todoItems, { text, completed: false }]);
    setText(""); 
  };

  const toggleItem = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems[index].completed = !newTodoItems[index].completed;
    setTodoItems(newTodoItems);
  };

  const deleteItem = (index) => {
    setTodoItems(todoItems.filter((_, i) => i !== index));
  };

  const handleKeyDown = (event) => {
    console.log(event.key);
    if (event.key === "Enter") {
      addItem();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter a task..." 
      />
      <button onClick={addItem} id="addItemButton">
        Add Item
      </button>
      {todoItems.map((todo, index) => (
        <div key={index}>
          <input type="checkbox" checked={todo.completed} onChange={() => toggleItem(index)} />
          {todo.text}
          <button onClick={() => deleteItem(index)}>Delete Item</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
