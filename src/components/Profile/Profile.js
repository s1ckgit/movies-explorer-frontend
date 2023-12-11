import React, { useContext, useEffect, useRef, useState } from 'react'
import './Profile.css'
import Header from '../Header/Header'
import useFormWithValidation from '../useFormWithValidation/useFormWithValidation'
import {CurrentUserContext} from '../../contexts/CurrentUserContext'
import mainApi from '../../utils/MainApi'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import cn from 'classnames'

const Profile = ({authorized}) => {
  const navigate = useNavigate()
  const {unathorize} = useContext(AuthContext)
  const nameInputElement = useRef()
  const emailInputElement = useRef()
  const {currentUser, setCurrentUser} = useContext(CurrentUserContext)
  const {values, handleChange, errors, isValid, setIsValid, setValues} = useFormWithValidation()
  const [error, setError] = useState(null)
  const result = useRef()

  useEffect(() => {
    nameInputElement.current.value = currentUser.name
    nameInputElement.current.dataset.isValid = true
    emailInputElement.current.value = currentUser.email
    emailInputElement.current.dataset.isValid = true

    setValues({
      name: {
        value: currentUser.name,
        isValid: true
      },
      email: {
        value: currentUser.email,
        isValid: true
      }
    })
    setIsValid(false)
  }, [])

  function onChange(e) {
    handleChange(e)
    if(nameInputElement.current.value === currentUser.name && emailInputElement.current.value === currentUser.email) {
      setIsValid(false)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    const email = values.email.value
    const name = values.name.value

    setIsValid(false)
    nameInputElement.current.readOnly = true
    emailInputElement.current.readOnly = true

    mainApi.changeUserData({
      email,
      name
    })
      .then((res) => {
        const {email, name} = res
        setCurrentUser({
          ...currentUser,
          email,
          name
        })
        localStorage.setItem('user', JSON.stringify(res))
        result.current.innerText = 'Данные были успешно изменены'
        setTimeout(() => {
          result.current.innerText = ''
        }, 5000)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setIsValid(true)
        nameInputElement.current.readOnly = false
        emailInputElement.current.readOnly = false
      })
  }

  function handleUnathorize(e) {
    mainApi.unathorize()
      .then((res) => {
        navigate('/')
        unathorize()
      })
      .catch((err) => {
        setError(err)
      })
  }

  return (
    <>
      <Header authorized={authorized}/>
      <section className='profile'>
      <h1 className='profile__title'>Привет, {currentUser.name}</h1>

      <form noValidate onSubmit={handleSubmit} className='profile-form'>
        <label className='profile-form__label profile-form__label_name'>
          <input ref={nameInputElement} onChange={onChange} name='name' id='name' className='profile-form__input profile-form__input_name'/>
          <span className='profile-form__error'>{errors.name}</span>
        </label>

        <label className='profile-form__label profile-form__label_email'>
          <input ref={emailInputElement} onChange={onChange} name='email' id='email' className='profile-form__input profile-form__input_email'/>
          <span className='profile-form__error'>{errors.email}</span>
        </label>


        <span ref={result} className={cn('profile-form__result', {
          'profile-form__result_error': error != null
        })}>{error && error.message}</span>
        <button disabled={!isValid} type='submit' className='link profile-form__submit'>Редактировать</button>
        <button onClick={handleUnathorize} type='button' className='link profile-form__exit'>Выйти из аккаунта</button>
      </form>
    </section>
    </>
  )
}

export default Profile
