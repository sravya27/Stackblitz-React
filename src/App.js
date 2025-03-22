import React from 'react';
import './style.css';
import TodoList from './Todo';

export default function App() {
  const navLinks = [
    { text: 'Google', url: '/Google' },
    { text: 'Home', url: '/Home' },
  ];

  return (
    <div>
      <h1>Hello ToDo List!</h1>
      <TodoList />
    </div>
  );
}
