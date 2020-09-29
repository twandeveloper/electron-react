import React, { useReducer } from 'react';
import './App.css';

import Login from './components/Login/Login';

const users = [
  { id: 1, userName: 'Twan' },
  { id: 2, userName: 'Amos' },
];

const reducer = (users, action) => {
  switch (action.type) {
    case 'login': {
      users.forEach((user) => {
        if (user.userName === action.payload.userName) {
          console.log('User Found');
        } else {
          console.log('No user Found');
        }
      });
      console.log(users[0].userName);
      console.log(action.payload.userName);
      break;
    }
    default: {
      return users;
    }
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, users);

  //compares entered user name with usernames in database
  const logOnHandler = (e) => {
    const user = {
      userName: e.userName,
      password: e.password,
    };
    users.forEach((user) => {
      if (user.userName === e.userName) {
        console.log('User Found');
      } else {
        console.log('No user Found');
      }
    });
  };

  return (
    <div className='App'>
      <Login login={(user) => logOnHandler(user)} />
    </div>
  );
};

export default App;
