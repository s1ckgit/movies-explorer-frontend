import React from 'react'
import './Navigation.css'
import { NavLink, useLocation } from 'react-router-dom'
import cn from 'classnames'

const Navigation = ({burger = undefined}) => {
  const path = useLocation().pathname

  return (
    <nav className={cn({
      'navigation': burger === undefined,
      'navigation_768': burger
    })}>
      {burger && <NavLink to='/' className={cn('link', 'navigation__link', {
        'navigation__link_active': path === '/'
      })}>Главная</NavLink>}
      <NavLink to='/movies' className={cn('link', 'navigation__link', {
        'navigation__link_active': path === '/movies'
      })}>Фильмы</NavLink>
      <NavLink to='/saved-movies' className={cn('link', 'navigation__link', {
        'navigation__link_active': path === '/saved-movies'
      })}>Сохранённые фильмы</NavLink>
    </nav>
  )
}

export default Navigation
