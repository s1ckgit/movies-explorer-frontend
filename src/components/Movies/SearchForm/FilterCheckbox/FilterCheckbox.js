import React, { useEffect, useRef } from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = ({ setCheckboxState, searchMovies }) => {
  const checkbox = useRef();

  useEffect(() => {
    if(localStorage.getItem('checkboxState')) {
      checkbox.current.checked = JSON.parse(localStorage.getItem('checkboxState'));
      setCheckboxState(checkbox.current.checked);
    }
  }, [setCheckboxState]);

  function toggleCheckbox(e) {
    const checked = e.target.checked;
    searchMovies(e, checkbox.current);
    setCheckboxState(checked);
    localStorage.setItem('checkboxState', checked);
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

export default FilterCheckbox;
