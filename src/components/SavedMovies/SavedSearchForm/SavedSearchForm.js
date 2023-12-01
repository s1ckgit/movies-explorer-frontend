import React from 'react'
import './SavedSearchForm.css'
import find from '../../../images/find.svg'
import SavedFilterCheckbox from './SavedFilterCheckbox/SavedFilterCheckbox'

const SavedSearchForm = ({searchMovies, setSearchRequest, setCheckboxState}) => {
  function changeSearchRequest(e) {
    const value = e.target.value
    setSearchRequest(value)
  }

  return (
    <div className='search-form container'>
      <form noValidate onSubmit={searchMovies} className='search-form__form'>
        <input onChange={changeSearchRequest} required name='search' type='search' placeholder='Фильм' className='search-form__input'></input>
        <button className='button search-form__button' type='submit'><img src={find} alt='Кнопка поиска'/></button>
        <SavedFilterCheckbox searchMovies={searchMovies} setCheckboxState={setCheckboxState}/>
      </form>
    </div>
  )
}

export default SavedSearchForm
