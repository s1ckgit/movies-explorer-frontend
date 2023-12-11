import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { AuthContext } from '../../contexts/AuthContext';
import { ErrorContext } from '../../contexts/ErrorContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AuthError from '../AuthError/AuthError';
import ErrorPopup from '../ErrorPopup/ErrorPopup';

const App = () => {
  const authorizedStorage = JSON.parse(localStorage.getItem('authorized'))
  const userDataStorage = JSON.parse(localStorage.getItem('user'))
  const [authorized, setAuthorized] = useState(authorizedStorage)
  const [currentUser, setCurrentUser] = useState(userDataStorage)
  const [authError, setAuthError] = useState(null)
  const [errorPopup, setErrorPopup] = useState(null)

  function authorize(user) {
    setAuthorized(true)
    localStorage.setItem('authorized', true)
    localStorage.setItem('user', JSON.stringify(user))
  }

  function unathorize() {
    setAuthorized(false)
    localStorage.clear()
  }

  useEffect(() => {
    const id = localStorage.getItem('id')
    if (id) {
      mainApi.checkJwt(id)
        .then((res) => {
          setCurrentUser(res)
          authorize(res)
          setAuthError(null)
        })
        .catch((err) => {
          setAuthError(err)
        })
    } else {
      setCurrentUser(null)
      unathorize()
    }
  }, [])

  document.documentElement.lang = 'ru'
  return (
    <AuthContext.Provider value={{authorize, unathorize}}>
      <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
        <ErrorContext.Provider value={{errorPopup, setErrorPopup}}>
          <div className='page'>
            {errorPopup && <ErrorPopup err={errorPopup}/>}
            {authError && <AuthError err={authError}/>}
            {!authError && <Routes>
              <Route path='/signup' element={<Register />}/>
              <Route path='/signin' element={<Login />}/>
              <Route path='/' element={<Main authorized={authorized}/>}/>
              <Route path='/movies' element={<ProtectedRoute element={Movies} authorized={authorized}/>}/>
              <Route path='/saved-movies' element={<ProtectedRoute element={SavedMovies} authorized={authorized}/>} />
              <Route path='/profile' element={<ProtectedRoute element={Profile} authorized={authorized}/>}/>
              <Route path='*' element={<NotFound />}/>
            </Routes>}
          </div>
        </ErrorContext.Provider>
      </CurrentUserContext.Provider>
    </AuthContext.Provider>


  )
}

export default App
