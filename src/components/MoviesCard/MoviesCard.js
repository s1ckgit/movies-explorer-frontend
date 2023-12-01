import React, { useContext, useState } from 'react'
import './MoviesCard.css'
import cn from 'classnames'
import { Navigate, useLocation } from 'react-router-dom'
import mainApi from '../../utils/MainApi'
import { ErrorContext } from '../../contexts/ErrorContext'

const MoviesCard = ({data, isSaved, dataThumbnail, dataImage, dataMovieId, setWasDeleted}) => {
  const movieId = dataMovieId
  const {country, director, duration, year, description, trailerLink, nameRU, nameEN} = data
  const title = data.nameRU
  const image = dataImage
  const thumbnail = dataThumbnail
  const imageLink = `https://api.nomoreparties.co/${image}`
  const hours = Math.floor(duration / 60)
  const minutes = duration % 60
  const [saved, setSaved] = useState(isSaved)
  const path = useLocation().pathname
  const {setErrorPopup} = useContext(ErrorContext)

  function saveFilm() {
    mainApi.saveMovie({
      country,
      director,
      year,
      duration,
      description,
      trailerLink,
      nameRU,
      nameEN,
      thumbnail,
      image,
      movieId
    })
      .then((res) => {
        setSaved(true)
      })
      .catch((err) => {
        setErrorPopup(err)
      })
  }

  function removeFilm(e) {
    mainApi.getMovies()
      .then((res) => {
        const id = res.find((film) => film.movieId === movieId)._id
        mainApi.deleteMovie(id)
          .then(() => {
            setSaved(false)
            if(setWasDeleted) {
              setWasDeleted(val => !val)
            }
          })
          .catch((err) => {
            setErrorPopup(err)
          })
      })
      .catch((err) => {
        setErrorPopup(err)
      })
  }

  function openTrailer() {
    window.open(trailerLink, '_blank')
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

      <img onClick={(e) => {
        e.stopPropagation()
        openTrailer()
      }} className='movies-card__image' src={imageLink} alt={title}/>
      <h3 className='movies-card__title'>{title}</h3>
      <div className='movies-card__duration'>
        {`${hours}ч ${minutes !== 0 ? (minutes + 'м') : ''}`}
      </div>
    </div>
  )
}

export default MoviesCard
