import React from 'react';
import './UserBox.css';
import { jwtDecode } from 'jwt-decode';

function UserBox({ setModalBox, token, setToken, setPage }) {

  function logout() {
    setToken(null)
    localStorage.removeItem('token')
    setPage('Main')
  }

  function MultipleBoxes() {
    if (token !== null) {
      const login = jwtDecode(token).login

      // console.debug(login)

      return (
        <div className="UserBox">
          <p className='label'>{login}, вы на сайте!</p>
          <button onClick={() => setPage('Cabinet')}>личный кабинет</button>
          <button onClick={() => logout()}>выйти</button>
        </div>
      )
    }

    return (
      <div className="UserBox">
        <button onClick={() => setModalBox('Login')}>вход</button>
        <button onClick={() => setModalBox('Registration')}>регистрация</button>
      </div>
    )
  }

  return (
    <MultipleBoxes />
  );
}

export default UserBox;