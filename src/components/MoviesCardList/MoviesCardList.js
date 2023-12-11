import React, { useContext, useEffect, useRef, useState } from 'react'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import SearchForm from '../Movies/SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader'
import NotFoundResult from '../NotFoundResult/NotFoundResult'
import moviesApi from '../../utils/MoviesApi'
import mainApi from '../../utils/MainApi'
import SearchError from '../SearchError/SearchError'
import { ErrorContext } from '../../contexts/ErrorContext'

const MoviesCardList = () => {

  const [globalData, setGlobalData] = useState(null)
  const [dataToRender, setDataToRender] = useState(null)
  const [renderMore, setRenderMore] = useState(0)
  const [preloader, setPreloader] = useState(false)
  const [notFound, setNotFound] = useState(false)

  const [searchErrorState, setSearchErrorState] = useState(false)
  const {setErrorPopup} = useContext(ErrorContext)
  const [error, setError] = useState(false)

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const renderedCards = useRef(new Set([]))
  const savedCards = useRef(new Set([]))

  const [searchRequest, setSearchRequest] = useState('')
  const [checkboxState, setCheckboxState] = useState(false)

  useEffect(() => {
    window.addEventListener('resize', changeWindowWidth)
    return () => window.removeEventListener('resize', changeWindowWidth)
  })

  useEffect(() => {
    async function fecthData() {
      await mainApi.getMovies()
      .then((res) => {
        res.forEach((item) => {
          savedCards.current.add(item.movieId)
        })
      })
      .catch((err) => {
        setErrorPopup(err)
      })

      if(localStorage.getItem('searchRequest')) {
        setSearchRequest(localStorage.getItem('searchRequest'))
      }
      if(localStorage.getItem('checkboxState')) {
        setCheckboxState(JSON.parse(localStorage.getItem('checkboxState')))
      }
      if(localStorage.getItem('filmsToRender')) {
        setDataToRender(JSON.parse((localStorage.getItem('filmsToRender'))))
        if(JSON.parse(localStorage.getItem('filmsToRender')).length === 0) {
          setNotFound(true)
        }
      }
    }
    fecthData()
  }, [])

  async function searchMovies(e, checkboxElement) {
    let checkbox
    if(e.target.nodeName !== 'INPUT') {
      e.preventDefault()
      checkbox = checkboxState
    } else {
      checkbox = checkboxElement.checked
    }

    setPreloader(true)
    setNotFound(false)
    setDataToRender(null)
    setError(false)

    if(!searchRequest) {
      setError(true)
      setPreloader(false)
      return
    }

    try {
      let data
      if(!globalData) {
        data = await moviesApi.getFilms()
        setGlobalData(data)
      } else {
        data = globalData
      }
      const res = data.filter((film) => {
        const nameResult = film.nameRU.toLowerCase().includes(searchRequest.toLowerCase()) || film.nameEN.toLowerCase().includes(searchRequest.toLowerCase())
        if (checkbox) {
          const checkboxResult = film.duration <= 40
          return nameResult && checkboxResult
        }
        return nameResult
      })

      if (res.length === 0) {
        setNotFound(true)
      } else {
        setDataToRender(res)
      }

      localStorage.setItem('filmsToRender', JSON.stringify(res))
      localStorage.setItem('searchRequest', searchRequest)

      setSearchErrorState(false)
    } catch(e) {
      console.log(e)
      setSearchErrorState(true)
    }

    setPreloader(false)
  }

  function changeWindowWidth() {
    setWindowWidth(window.innerWidth)
  }

  function toRenderMore() {
    if (windowWidth >= 1075) {
      setRenderMore(val => val + 3)
    } else {
      setRenderMore(val => val + 2)
    }
  }

  function renderCards() {
    renderedCards.current.clear()
    return dataToRender.map((item, i) => {
      if (windowWidth >= 1075) {
        if (i < 12 + renderMore) {
          renderedCards.current.add(item.id)
          return <MoviesCard data={item} key={item.id} isSaved={savedCards.current.has(item.id)} dataThumbnail={item.image.formats.thumbnail.url} dataImage={item.image.url} dataMovieId={item.id}/>
        }
      } else if (windowWidth < 1075 && windowWidth > 766) {
        if (i < 8 + renderMore) {
          renderedCards.current.add(item.id)
          return <MoviesCard data={item} key={item.id} isSaved={savedCards.current.has(item.id)} dataThumbnail={item.image.formats.thumbnail.url} dataImage={item.image.url} dataMovieId={item.id}/>
        }
      } else {
        if (i < 5 + renderMore) {
          renderedCards.current.add(item.id)
          return <MoviesCard data={item} key={item.id} isSaved={savedCards.current.has(item.id)} dataThumbnail={item.image.formats.thumbnail.url} dataImage={item.image.url} dataMovieId={item.id}/>
        }
      }
    })
  }

  return (
    <>
      <SearchForm error={error} setCheckboxState={setCheckboxState} searchMovies={searchMovies} setSearchRequest={setSearchRequest} setRenderMore={setRenderMore}/>
      {preloader && <Preloader />}
      {notFound && <NotFoundResult />}
      {searchErrorState && <SearchError />}
      {(dataToRender && dataToRender.length > 0) && <div className='moviesList'>
        {renderCards()}
      </div>}
      {dataToRender && (dataToRender.length > renderedCards.current.size) && <button onClick={toRenderMore} className='button moviesList-button'>Ещё</button>}
    </>
  )
}

export default MoviesCardList
