import React from 'react'
import './NotFound.css'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  function onClick() {
    navigate(-1)
  }
  return (
    <section className='notFound'>
      <h1 className='notFound__title'>404</h1>
      <h2 className='notFound__subtitle'>Страница не найдена</h2>
      <button onClick={onClick} className='button notFound__button'>Назад</button>
    </section>
  )
}

export default NotFound
