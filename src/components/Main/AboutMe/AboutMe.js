import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section id='aboutMe' className='aboutMe container'>
      <h2 className='aboutMe__title'>Студент</h2>
      <div className='aboutMe__info'>
        <div className='aboutMe__text'>
          <h3 className='aboutMe__name'>Антон</h3>
          <h4 className='aboutMe__profession'>Фронтенд-разработчик, 22 года</h4>
          <p className='aboutMe__about'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a rel='noreferrer' target='_blank' href='https://github.com/s1ckgit' className='link'>Github</a>
        </div>
        <img className='aboutMe__photo' src='https://wiki.gbl.gg/images/2/2c/SKSOS_FaustVIII_Portrait.png' alt='тупа я)0)))'/>
      </div>
    </section>
  );
};

export default AboutMe;
