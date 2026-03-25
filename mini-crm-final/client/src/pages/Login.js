
import React, { useState } from 'react';
import API from '../services/api';

function Login() {
  const [data, setData] = useState({ email: '', password: '' });

  const login = () => {
    API.post('/auth/login', data).then(res => {
      localStorage.setItem("token", res.data.token);
      window.location.reload();
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setData({...data, email: e.target.value})}/>
      <input type="password" placeholder="Password" onChange={e => setData({...data, password: e.target.value})}/>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
