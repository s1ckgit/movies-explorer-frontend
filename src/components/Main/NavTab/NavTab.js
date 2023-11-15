import React from 'react'
import './NavTab.css'

const NavTab = () => {
  return (
    <nav className='navtab'>
      <button className='navtab__button'><a className='link navtab__link' href='#aboutProject'>О проекте</a></button>
      <button className='navtab__button'><a className='link navtab__link' href='#techs'>Технологии</a></button>
      <button className='navtab__button'><a className='link navtab__link' href='#aboutMe'>Студент</a></button>
    </nav>
  )
}

export default NavTab
