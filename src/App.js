import React from 'react';
import './App.css';
import Login from './page/login/login';
import DashBoard from './page/dashboard/dashboard';


import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Route path="/" exact component={Login} />
        <Route path="/dashboard"  component={DashBoard} />
      </div>
    </BrowserRouter>
  );
}

export default App;
