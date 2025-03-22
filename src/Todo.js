import React, { useState } from 'react';

const TodoList = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [text, setText] = useState();

  const addItem = () => {
    setTodoItems([...todoItems, { text, completed: false }]);
    setText('');
  };

  const toggleItem = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems[index].completed = !newTodoItems[index].completed;
    setTodoItems(newTodoItems);
  };

  const deleteItem = (index) => {
    const newTodoItems = todoItems.filter((_, i) => i !== index);
    setTodoItems(newTodoItems);
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)}></input>
      <button onClick={addItem}> Add Item</button>
      {todoItems.map((todo, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleItem(index)}
          />
          {todo.text}
          <button onClick={() => deleteItem(index)}>Delete Item</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
