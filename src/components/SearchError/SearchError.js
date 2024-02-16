import React from 'react';
import './SearchError.css';

const SearchError = () => {
  return (
    <span className='search-error'>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</span>
  );
};

export default SearchError;
