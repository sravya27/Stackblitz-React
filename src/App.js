import React from 'react';
import './style.css';
import { HashRouter } from "react-router-dom";
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

      <HashRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={TodoList} />
            <Route exact path="/tabs" component={TabsComponent} />
            <Route exact path="/datafetch" component={DataFetch} />
          </Switch>
        </Layout>
      </HashRouter>
    </div>
  );
}
