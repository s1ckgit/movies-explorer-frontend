import React, { useRef } from 'react';
import './SavedFilterCheckbox.css';

const SavedFilterCheckbox = ({ setCheckboxState, searchMovies }) => {
  const checkbox = useRef();
  console.log('лох');

  function toggleCheckbox(e) {
    searchMovies(e, checkbox.current);
    setCheckboxState(checkbox.current.checked);
  }

  return (
    <div className='wrapper'>
      <span className='checkbox'>
        <input ref={checkbox} onChange={toggleCheckbox} name='checkbox' className='checkbox__input' type='checkbox' />
        <div className='checkbox__mask'></div>
      </span>
      <span className='checkbox-desc'>Короткометражки</span>
    </div>
  );
};

export default SavedFilterCheckbox;
