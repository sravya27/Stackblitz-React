import React from 'react';
import './style.css';
import { HashRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import TodoList from './TodoList';
import DataFetch from './DataFetch';
import TabsComponent from './TabsComponent';
import ModalComponent from './ModalComponent';
import "./Navbar.css";

export default function App() {

  return (
    <div>
      <h1>Welcome to my practice app!</h1>

      <Router>
        <nav className='navbar'>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            TodoList
          </NavLink>
          <NavLink to="/tabs" className={({ isActive }) => (isActive ? "active" : "")}>
            Tabs
          </NavLink>
          <NavLink to="/api" className={({ isActive }) => (isActive ? "active" : "")}>
            Api
          </NavLink>
          <NavLink to="/modal" className={({ isActive }) => (isActive ? "active" : "")}>
            Modal
          </NavLink>
        </nav>
        <br />
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/tabs" element={<TabsComponent />} />
          <Route path="/api" element={<DataFetch />} />
          <Route path="/modal" element={<ModalComponent />} />
        </Routes>
      </Router>
    </div>
  );
}
