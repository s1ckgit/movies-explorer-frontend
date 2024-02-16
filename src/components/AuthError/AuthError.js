import React from 'react';
import './AuthError.css';

const AuthError = ({ err }) => {
  return (
    <section className='authError'>
    <h1 className='authError__title'>{err.code}</h1>
    <h2 className='authError__subtitle'>{err.message}. Попробуйте очистить локальное хранилище и авторизоваться заново.</h2>
    <button className='authError__button' onClick={() => {localStorage.clear(); window.location.reload();}} type='button'>Очистить хранилище</button>
  </section>
  );
};

export default AuthError;
