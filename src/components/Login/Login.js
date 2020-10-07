import React, { useState, useReducer } from 'react';
import { withRouter } from 'react-router-dom';
import auth from '../../auth/Auth';

import './Login.css';

import Modal from '../../ui/Modal';

const Login = ({ history }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('test');
  const [showModal, setShowModal] = useState(false);

  // const [state, dispatch] = useReducer(reducer, initialState);

  const userHandler = (e) => {
    e.preventDefault();
    const userInfo = {
      userName: user,
      password: password,
    };

    checkAuth();
  };

  const checkAuth = () => {
    auth.login(user, (auth) => {
      if (auth) {
        setShowModal(true);
      } else {
        return null;
      }
    });
  };

  const decModal = showModal ? <Modal history={history} /> : '';

  return (
    <div className='Login'>
      <h1>Login Page</h1>
      <form>
        <input
          className='text'
          type='text'
          placeholder='Username'
          name='Username'
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />
        <input
          className='text'
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
      {decModal}
    </div>
  );
};

export default withRouter(Login);
