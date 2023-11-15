import React from 'react'
import './FilterCheckbox.css'

const FilterCheckbox = () => {
  return (
    <div className='wrapper'>
      <span className='checkbox'>
        <input className='checkbox__input' type='checkbox' />
        <div className='checkbox__mask'></div>
      </span>
      <span className='checkbox__desc'>Короткометражки</span>
    </div>
  )
}

export default FilterCheckbox
