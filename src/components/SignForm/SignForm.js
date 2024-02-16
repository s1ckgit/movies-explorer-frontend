import React, { useContext, useState } from 'react';
import './SignForm.css';
import logo from '../../images/logo.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import useFormWithValidation from '../useFormWithValidation/useFormWithValidation';
import mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { AuthContext } from '../../contexts/AuthContext';
import cn from 'classnames';
import { useRef } from 'react';

const SignForm = ({ register }) => {
  const { authorize } = useContext(AuthContext);
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, resetForm, setIsValid } = useFormWithValidation();
  const [error, setError] = useState(null);
  const nameInputElement = useRef();
  const emailInputElement = useRef();
  const passwordInputElement = useRef();

  function handleSubmit(e) {
    const name = values.name?.value;
    const email = values.email?.value;
    const password = values.password?.value;

    setIsValid(false);
    if(nameInputElement.current) {
      nameInputElement.current.readOnly = true;
    }
    emailInputElement.current.readOnly = true;
    passwordInputElement.current.readOnly = true;

    e.preventDefault();
    if(register) {
      mainApi.registerUser({
        name,
        email,
        password
      })
        .then((res) => {
          setCurrentUser(res);
          resetForm();
          authorize(res);
          localStorage.setItem('id', res._id);
          navigate('/movies');
          setError(null);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setIsValid(true);
          if(nameInputElement.current) {
            nameInputElement.current.readOnly = false;
          }
          emailInputElement.current.readOnly = false;
          passwordInputElement.current.readOnly = false;
        });
    } else {
      mainApi.loginUser({
        email,
        password
      })
        .then((res) => {
          setCurrentUser(res);
          resetForm();
          authorize(res);
          localStorage.setItem('id', res._id);
          navigate('/movies');
          setError(null);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setIsValid(true);
          if(nameInputElement.current) {
            nameInputElement.current.readOnly = false;
          }
          emailInputElement.current.readOnly = false;
          passwordInputElement.current.readOnly = false;
        });
    }
  }

  return (
    <section className='sign-form-section'>
      <NavLink className='sign-form-section__link' to='/'><img className='sign-form-section__logo' src={logo} alt='logo'/></NavLink>
      <h1 className='sign-form-section__title'>{register ? 'Добро пожаловать!' : 'Рады видеть!'}</h1>

      <form onSubmit={handleSubmit} noValidate className='sign-form'>
        {register &&
        <>
          <fieldset className='sign-form__fieldset'>
            <label className='sign-form__label' htmlFor='name'>Имя</label>
            <input ref={nameInputElement} onChange={handleChange} required={true} className='sign-form__input' type='text' id='name' name='name'/>
            <span className='sign-form__error'>{errors.name}</span>
          </fieldset>
        </>
        }

        <fieldset className='sign-form__fieldset'>
          <label className='sign-form__label' htmlFor='email'>Email</label>
          <input ref={emailInputElement} onChange={handleChange} required={true} type='email' className='sign-form__input' id='email' name='email'/>
          <span className='sign-form__error'>{errors.email}</span>
        </fieldset>

        <fieldset className='sign-form__fieldset sign-form__fieldset_error'>
          <label className='sign-form__label' htmlFor='password'>Пароль</label>
          <input ref={passwordInputElement} onChange={handleChange} required={true} type='password' className='sign-form__input sign-form__input_error' id='password' name='password'/>
          <span className='sign-form__error'>{errors.password}</span>
        </fieldset>

        {error && <span className='sign-form__server-error'>{error.message}</span>}
        <button type='submit' disabled={!isValid} className={cn('sign-form__button', {
          'sign-form__button_margin': error != null
        })}>{register ? 'Зарегистрироваться' : 'Войти'}</button>
        <span className='sign-form__tip'>{
          register ?  <>Уже зарегистрированы? <NavLink className='link sign-form__link' to='/signin'>Войти</NavLink></> :
          <>Ещё не зарегистрированы? <NavLink className='link sign-form__link' to='/signup'>Регистрация</NavLink></>
        }</span>
      </form>

    </section>
  );
};

export default SignForm;
