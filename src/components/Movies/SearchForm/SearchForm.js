import React from 'react'
import './SearchForm.css'
import find from '../../../images/find.svg'
import FilterCheckbox from './FilterCheckbox/FilterCheckbox'

const SearchForm = () => {
  return (
    <div className='searchForm container'>
      <form className='searchForm__form'>
        <input required name='search' type='search' placeholder='Фильм' className='searchForm__input'></input>
        <button className='button searchForm__button' type='submit'><img src={find} alt='Кнопка поиска'/></button>
        <FilterCheckbox />
      </form>
    </div>
  )
}

export default SearchForm
