import React from 'react'
import SearchForm from './SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Movies = () => {
  //Рыбные данные для тестовой отрисовки карточек
  const data = [
    {isSaved: false, id: 1, nameRU: 'film1', duration: 123, image: 'https://www.billboard.com/wp-content/uploads/media/Tyler-The-Creator-press-by-Sam-Rock-2019-billboard-1548.jpg' },
    {isSaved: false, id: 2, nameRU: 'film2', duration: 123, image: 'https://www.billboard.com/wp-content/uploads/media/Tyler-The-Creator-press-by-Sam-Rock-2019-billboard-1548.jpg' },
    {isSaved: false, id: 3, nameRU: 'film3', duration: 123, image: 'https://www.billboard.com/wp-content/uploads/media/Tyler-The-Creator-press-by-Sam-Rock-2019-billboard-1548.jpg' },
  ]

  return (
    <>
      <Header authorized={true}/>
      <SearchForm />
      <MoviesCardList data={data} />
      <Footer />
    </>
  )
}

export default Movies
