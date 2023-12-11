import React from 'react'
import './SavedMovies.css'
import SearchForm from '../Movies/SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const SavedMovies = () => {
  //Рыбные данные для тестовой отрисовки карточек
  const data = [
    {isSaved: true, id: 1, nameRU: 'film1', duration: 123, image: 'https://www.billboard.com/wp-content/uploads/media/Tyler-The-Creator-press-by-Sam-Rock-2019-billboard-1548.jpg' },
    {isSaved: true, id: 2, nameRU: 'film2', duration: 123, image: 'https://www.billboard.com/wp-content/uploads/media/Tyler-The-Creator-press-by-Sam-Rock-2019-billboard-1548.jpg' },
    {isSaved: true, id: 3, nameRU: 'film3', duration: 123, image: 'https://www.billboard.com/wp-content/uploads/media/Tyler-The-Creator-press-by-Sam-Rock-2019-billboard-1548.jpg' },
  ]

  return (
    <>
      <Header authorized={true}/>
      <SearchForm />
      <MoviesCardList toDelete={true} data={data}/>
      <Footer />
    </>
  )
}

export default SavedMovies
