import React, { useState } from 'react';

import './Login.css';

const Login = (props) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('test');

  const userHandler = (e) => {
    e.preventDefault();
    const userInfo = {
      userName: user,
      password: password,
    };
    props.login(userInfo);
  };

  return (
    <div className='Login'>
      <h1>Login Page</h1>
      <form>
        <input
          class='text'
          type='text'
          placeholder='Username'
          name='Username'
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />
        <input
          class='text'
          type='password'
          placeholder='Password'
          name='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          onClick={(e) => userHandler(e)}
          type='submit'
          id='login'
          value='Login'
        />
      </form>
    </div>
  );
};

export default Login;
