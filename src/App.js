import React from 'react';
import './style.css';
import TodoList from './TodoList';
import DataFetch from './DataFetch';
import TabsComponent from './TabsComponent';

export default function App() {
  const navLinks = [
    { text: 'Google', url: '/Google' },
    { text: 'Home', url: '/Home' },
  ];

  return (
    <div>
      <h1>Welcome to my practice app!</h1>
      <TabsComponent />
      <br />
      <TodoList />
      <br />
      <DataFetch />
    </div>
  );
}
