import React from 'react';
import './AboutProject.css';

const AboutProject = () => {
  return (
    <section id='aboutProject' className='aboutProject container'>
      <h2 className='aboutProject__title'>О проекте</h2>
      <div className='aboutProject__info'>
        <div className='aboutProject__col'>
          <h3 className='aboutProject__subtitle'>Дипломный проект включал 5 этапов</h3>
          <p className='aboutProject__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='aboutProject__col'>
          <h3 className='aboutProject__subtitle'>На выполнение диплома ушло 5 недель</h3>
          <p className='aboutProject__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='progress'>
        <div className='progress__bar progress__bar_green'>1 неделя</div>
        <div className='progress__bar progress__bar_gray'>4 недели</div>
        <div className='progress__description'>Back-end</div>
        <div className='progress__description'>Front-end</div>
      </div>
    </section>
  );
};

export default AboutProject;
