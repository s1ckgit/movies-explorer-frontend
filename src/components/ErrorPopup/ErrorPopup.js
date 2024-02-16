import React, { useState } from 'react';
import './ErrorPopup.css';
import cn from 'classnames';

const ErrorPopup = ({ err }) => {
  const [visibleState, setVisibleState] = useState(true);

  function close() {
    setVisibleState(false);
  }

  return (
    <div className={cn('error-popup', {
      'error-popup_visible': visibleState
    })}>
      <span onClick={() => close()} className='error-popup__close'>&#10005;</span>
      <span>{err.message}</span>
    </div>
  );
};

export default ErrorPopup;
