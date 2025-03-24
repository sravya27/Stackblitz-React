import React from 'react';
import { HashRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import './style.css';
import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './TodoList';
import DataFetch from './DataFetch';
import TabsComponent from './TabsComponent';
import ModalComponent from './ModalComponent';
import CarouselComponent from './CarouselComponent';
import StarRating from './StarRating';

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
            Carousel
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
          <Route path="/tabs" element={<CarouselComponent />} />
          <Route path="/api" element={<DataFetch />} />
          <Route path="/modal" element={<StarRating />} />
        </Routes>
      </Router>
    </div>
  );
}
