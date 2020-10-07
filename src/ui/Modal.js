import React from 'react';
import './Modal.css';

const Modal = ({ history }) => {
  const toDashHandler = () => {
    history.push('./dashboard');
  };
  return (
    <div className='Modal'>
      <h1>Welcome to modal</h1>
      <div className='btn-grp'>
        <button onClick={toDashHandler}>DashBoard</button>
        <button>New form</button>
      </div>
    </div>
  );
};

export default Modal;
