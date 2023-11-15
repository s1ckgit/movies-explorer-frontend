import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer container'>
      <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className='footer__info'>
        <div className='footer__copyright'>© 2023</div>
        <div className='footer__links'>
          <a rel='noreferrer' target='_blank' href='https://practicum.yandex.ru/' className='link'>Яндекс.Практикум</a>
          <a rel='noreferrer' target='_blank' href='https://github.com/s1ckgit' className='link'>Github</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
