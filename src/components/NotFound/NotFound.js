import React from 'react'
import './NotFound.css'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className='notFound'>
      <h1 className='notFound__title'>404</h1>
      <h2 className='notFound__subtitle'>Страница не найдена</h2>
      <NavLink className='link notFound__link' to='/'>Назад</NavLink>
    </section>
  )
}

export default NotFound
