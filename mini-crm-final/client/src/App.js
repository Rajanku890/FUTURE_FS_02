
import React from 'react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {
  return localStorage.getItem("token") ? <Dashboard /> : <Login />;
}

export default App;
