import React, { useRef } from 'react'
import Navigation from '../Navigation/Navigation'
import './Header.css'
import logo from '../../images/logo.svg'
import { NavLink } from 'react-router-dom'

const Header = ({authorized}) => {
  const burgerMenu = useRef()

  function openBurger() {
    burgerMenu.current.classList.add('header__burger-menu_opened')
  }

  function closeBurger() {
    burgerMenu.current.classList.remove('header__burger-menu_opened')
  }

  return (
    <header className='header container'>
        <NavLink className='header__link' to='/'>
          <img src={logo} alt='Логотип' className='header__logo'/>
        </NavLink>
        {authorized && <Navigation />}
        {authorized && <button className='header__account'><NavLink to='/profile' className='link'>Аккаунт</NavLink></button>}
        {authorized && <div onClick={openBurger} className='header__burger'></div>}
        {authorized && <div ref={burgerMenu} className='header__burger-menu'>
            <div onClick={closeBurger} className='header__burger-close'></div>
            <Navigation burger={true}/>
            <button className='header__account header__account_768'><NavLink to='/profile' className='link'>Аккаунт</NavLink></button>
          </div>}
        {!authorized && <div className='header__buttons'><NavLink to='/signout' className='link'>Регистрация</NavLink><button className='header__button button'><NavLink to='/signin' className='link'>Войти</NavLink></button></div>}
    </header>
  )
}

export default Header
