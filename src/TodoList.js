import React, { useState } from "react";

const TodoList = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [text, setText] = useState("");  // ✅ Ensure text is initialized as an empty string

  const addItem = () => {
    if (text.trim() === "") return;  // Prevent adding empty items
    setTodoItems([...todoItems, { text, completed: false }]);
    setText("");  // Clear input field after adding
  };

  const handleKeyDown = (event) => {
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
        onKeyDown={(e) => handleKeyDown(e)}
        placeholder="Enter a task..."  // ✅ Placeholder should now be visible
        style={{ padding: "8px", fontSize: "16px" }} // Ensure visible size
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {todoItems.map((todo, index) => (
          <li key={index}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
