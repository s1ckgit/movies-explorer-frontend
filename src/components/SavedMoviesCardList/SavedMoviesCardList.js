import React, { useEffect, useState } from 'react'
import './SavedMoviesCardList.css'
import mainApi from '../../utils/MainApi'
import MoviesCard from '../MoviesCard/MoviesCard'
import NotFoundResult from '../NotFoundResult/NotFoundResult'
import SavedSearchForm from '../SavedMovies/SavedSearchForm/SavedSearchForm'
import SearchError from '../SearchError/SearchError'

const SavedMoviesCardList = () => {
  const [data, setData] = useState(undefined)
  const [dataToShow, setDataToShow] = useState(undefined)
  const [wasDeleted, setWasDeleted] = useState(false)
  const [notFound, setNotFound] = useState(false)

  const [searchErrorState, setSearchErrorState] = useState(false)

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const [searchRequest, setSearchRequest] = useState('')
  const [checkboxState, setCheckboxState] = useState(false)

  function changeWindowWidth() {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    mainApi.getMovies()
      .then((res) => {
        setData(res)
        setDataToShow(res)
        setSearchErrorState(false)
      })
      .catch((err) => {
        setSearchErrorState(true)
      })
  }, [wasDeleted])

  useEffect(() => {
    // Проверка размера окна для изменения сетки
    window.addEventListener('resize', changeWindowWidth)
    return () => window.removeEventListener('resize', changeWindowWidth)
  })

  function searchMovies(e, checkboxElement) {
    let checkbox
    if(e?.target.nodeName !== 'INPUT') {
      e?.preventDefault()
      checkbox = checkboxState
    } else {
      checkbox = checkboxElement.checked
    }
    setNotFound(false)

    if(!searchRequest) {
      setDataToShow(data)
      return
    }

    const res = data.filter((film) => {
      const nameResult = film.nameRU.toLowerCase().includes(searchRequest.toLocaleLowerCase()) || film.nameEN.toLowerCase().includes(searchRequest.toLowerCase())
      if(checkbox) {
        const checkboxResult = film.duration <= 40
        return nameResult && checkboxResult
      }
      return nameResult
    })

    if (res.length === 0) {
      setNotFound(true)
    } else {
      setDataToShow(res)
    }
  }

  function renderCards() {
    return dataToShow.map((item, i) => {
      if (windowWidth >= 1075) {
        if (i < 12) {
          return <MoviesCard setWasDeleted={setWasDeleted} data={item} key={item.movieId} isSaved={true} dataImage={item.image} dataMovieId={item.movieId} dataThumbnail={item.thumbnail}/>
        }
      } else if (windowWidth < 1075 && windowWidth > 766) {
        if (i < 8) {
          return <MoviesCard data={item} key={item.movieId} isSaved={true} dataImage={item.image} dataMovieId={item.movieId} dataThumbnail={item.thumbnail}/>
        }
      } else {
        if (i < 5) {
          return <MoviesCard data={item} key={item.movieId} isSaved={true} dataImage={item.image} dataMovieId={item.movieId} dataThumbnail={item.thumbnail}/>
        }
      }
    })
  }

  return (
    <>
      <SavedSearchForm setSearchRequest={setSearchRequest} setCheckboxState={setCheckboxState} searchMovies={searchMovies}/>
      {notFound && <NotFoundResult />}
      {searchErrorState && <SearchError />}
      {(dataToShow && dataToShow.length > 0 && !notFound) && <div onLoad={searchMovies} className='moviesList'>
        {renderCards()}
      </div>}
    </>
  )
}

export default SavedMoviesCardList
