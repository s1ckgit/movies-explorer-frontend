import React from 'react'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

const MoviesCardList = ({data, toDelete = undefined}) => {
  return (
    <>
      <div className='moviesList'>
        {data.map((item) => <MoviesCard toDelete={toDelete} isSaved={item.isSaved} key={item.id} duration={item.duration} img={item.image} title={item.nameRU}/>)}
      </div>
      <button className='button moviesList-button'>Ещё</button>
    </>
  )
}

export default MoviesCardList
