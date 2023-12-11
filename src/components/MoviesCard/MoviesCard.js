import React, { useState } from 'react'
import './MoviesCard.css'
import cn from 'classnames'
import { useLocation } from 'react-router-dom'

const MoviesCard = ({img, title, duration, isSaved, toDelete = undefined}) => {
  const hours = Math.round(duration / 60)
  const minutes = duration % 60
  const [saved, setSaved] = useState(isSaved)
  const path = useLocation().pathname

  // Функции и стейт просто для демонстрации работы кнопок и анимаций

  function saveFilm() {
    setSaved(true)
  }

  function removeFilm(e) {
    setSaved(false)
    if (toDelete) {
      e.target.closest('.movies-card').remove()
    }
  }


  return (
    <div className='movies-card'>

      {saved &&
      <button className={cn('button', 'movies-card__saved-button', {
        'movies-card__saved-button_saved': path === '/movies',
        'movies-card__saved-button_to-delete': path === '/saved-movies'
      })} type='button' onClick={removeFilm} />}

      {path === '/movies' &&
      <button onClick={saveFilm} className={cn('movies-card__save', 'button', {
        'movies-card__save_hidden': saved === true
      })} type='button'>Сохранить</button>}

      <img className='movies-card__image' src={img} alt={title}/>
      <h3 className='movies-card__title'>{title}</h3>
      <div className='movies-card__duration'>
        {`${hours}ч ${minutes !== 0 ? (minutes + 'м') : ''}`}
      </div>
    </div>
  )
}

export default MoviesCard
