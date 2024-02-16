import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList';

const SavedMovies = ({ authorized }) => {

  return (
    <>
      <Header authorized={authorized}/>
      <SavedMoviesCardList />
      <Footer />
    </>
  );
};

export default SavedMovies;
