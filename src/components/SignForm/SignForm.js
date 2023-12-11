import React from 'react'
import './SignForm.css'
import logo from '../../images/logo.svg'
import { NavLink } from 'react-router-dom'

const SignForm = ({register}) => {
  return (
    <section className='sign-form-section'>
      <img className='sign-form-section__logo' src={logo} alt='logo'/>
      <h1 className='sign-form-section__title'>{register ? 'Добро пожаловать!' : 'Рады видеть!'}</h1>

      <form className='sign-form'>
        {register &&
        <>
          <fieldset className='sign-form__fieldset'>
            <label className='sign-form__label' htmlFor='name'>Имя</label>
            <input required={true} className='sign-form__input' type='text' id='name' name='name'/>
            <span className='sign-form__error'>Что-то пошло не так...</span>
          </fieldset>
        </>
        }

        <fieldset className='sign-form__fieldset'>
          <label className='sign-form__label' htmlFor='email'>Email</label>
          <input required={true} type='email' className='sign-form__input' id='email' name='email'/>
          <span className='sign-form__error'>Что-то пошло не так...</span>
        </fieldset>

        <fieldset className='sign-form__fieldset sign-form__fieldset_error'>
          <label className='sign-form__label' htmlFor='password'>Пароль</label>
          <input required={true} type='password' className='sign-form__input sign-form__input_error' id='password' name='password'/>
          <span className='sign-form__error sign-form__error_visible'>Что-то пошло не так...</span>
        </fieldset>

        <button className='sign-form__button'>{register ? 'Зарегистрироваться' : 'Войти'}</button>
        <span className='sign-form__tip'>{
          register ?  <>Уже зарегистрированы? <NavLink className='link sign-form__link' to='/signin'>Войти</NavLink></> :
          <>Ещё не зарегистрированы? <NavLink className='link sign-form__link' to='/signup'>Регистрация</NavLink></>
        }</span>
      </form>

    </section>
  )
}

export default SignForm
