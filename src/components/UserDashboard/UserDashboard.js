import React from 'react';
import { useHistory } from 'react-router-dom';
import auth from '../../auth/Auth';

const UserDashboard = ({ history }) => {
  const logoutHandler = () => {
    auth.logout(() => {
      console.log('You are logged out');
      history.push('/');
    });
  };

  return (
    <div>
      <h1>User Dashboard</h1>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default UserDashboard;
