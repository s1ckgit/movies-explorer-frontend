import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <section className='portfolio container'>
      <h2 className='portfolio__title'>
        Портфолио
      </h2>
      <div className='portfolio__items'>
        <a target='_blank' rel='noreferrer' href='https://s1ckgit.github.io/how-to-learn' className='link'>
          <div className='portfolio__item'>
            <h3 className='portfolio__item-title'>Статичный сайт</h3>
            <span className='portfolio__item-arrow'>↗</span>
          </div>
        </a>
        <a target='_blank' rel='noreferrer' href='https://s1ckgit.github.io/russian-travel' className='link'>
          <div className='portfolio__item'>
            <h3 className='portfolio__item-title'>Адаптивный сайт</h3>
            <span className='portfolio__item-arrow'>↗</span>
          </div>
        </a>
        <a target='_blank' rel='noreferrer' href='https://github.com/s1ckgit/react-mesto-api-full-gha' className='link'>
          <div className='portfolio__item portfolio__item_last'>
            <h3 className='portfolio__item-title'>Одностраничное приложение</h3>
            <span className='portfolio__item-arrow'>↗</span>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Portfolio
