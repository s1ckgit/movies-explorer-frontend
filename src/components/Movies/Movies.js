import React from 'react'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


const Movies = ({authorized}) => {
  return (
    <>
      <Header authorized={authorized}/>
      <MoviesCardList />
      <Footer />
    </>
  )
}

export default Movies
