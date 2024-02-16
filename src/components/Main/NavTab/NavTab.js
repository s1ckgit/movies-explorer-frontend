import React from 'react';
import './NavTab.css';

const NavTab = () => {
  return (
    <nav className='navtab'>
      <a className='link navtab__link' href='#aboutProject'><button className='navtab__button'>О проекте</button></a>
      <a className='link navtab__link' href='#techs'><button className='navtab__button'>Технологии</button></a>
      <a className='link navtab__link' href='#aboutMe'><button className='navtab__button'>Студент</button></a>
    </nav>
  );
};

export default NavTab;
