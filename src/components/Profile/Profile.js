import React from 'react'
import './Profile.css'
import Header from '../Header/Header'

const Profile = () => {
  return (
    <>
      <Header authorized={true}/>
      <section className='profile'>
      <h1 className='profile__title'>Привет, Виталий!</h1>

      <form className='profile-form'>
        <span className='profile-form__span profile-form__span_name'>
          <input name='name' id='name' className='profile-form__input profile-form__input_name'/>
        </span>

        <span className='profile-form__span profile-form__span_email'>
          <input name='email' id='email' className='profile-form__input profile-form__input_email'/>
        </span>



        <button type='submit' className='link profile-form__submit'>Редактировать</button>
        <button type='button' className='link profile-form__exit'>Выйти из аккаунта</button>
      </form>
    </section>
    </>
  )
}

export default Profile
