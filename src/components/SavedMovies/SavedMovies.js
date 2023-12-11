import React, { useState } from 'react'
import './SavedMovies.css'
import SearchForm from '../Movies/SearchForm/SearchForm'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList'

const SavedMovies = ({authorized}) => {

  return (
    <>
      <Header authorized={authorized}/>
      <SavedMoviesCardList />
      <Footer />
    </>
  )
}

export default SavedMovies
