import React, { useEffect, useRef } from 'react';
import './SearchForm.css';
import find from '../../../images/find.svg';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

const SearchForm = ({ setRenderMore, searchMovies, changeSearchRequest, setCheckboxState, error }) => {
  const input = useRef();

  useEffect(() => {
    if(localStorage.getItem('searchRequest')) {
      input.current.value = localStorage.getItem('searchRequest');
    }
  }, []);

  function onChange(e) {
    const value = e.target.value;
    changeSearchRequest(value);
  }

  return (
    <div className='search-form container'>
      <form noValidate onSubmit={searchMovies} className='search-form__form'>
        <input ref={input} onChange={onChange} required name='search' type='search' placeholder='Фильм' className='search-form__input'></input>
        <button onClick={() => setRenderMore(0)} className='button search-form__button' type='submit'><img src={find} alt='Кнопка поиска'/></button>
        <FilterCheckbox searchMovies={searchMovies} setCheckboxState={setCheckboxState} />
      </form>
      {error && <span className='search-form__error'>Нужно ввести ключевое слово</span>}
    </div>
  );
};

export default SearchForm;
