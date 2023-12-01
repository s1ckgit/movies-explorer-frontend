class MainApi {
  constructor() {
    this._baseUrl = 'https://api.diploma.siick.nomoredomainsrocks.ru'
    this._headers = {
      'Content-Type': 'application/json'
    }
  }

  checkJwt(id) {
    return fetch(`${this._baseUrl}/check-jwt`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        _id: id
      }),
      credentials: 'include'
    })
    .then((res) => {
      return this._checkResponse(res)
    })
  }

  _checkResponse(res) {
    if(res.ok) {
      return res.json()
        .then((res) => {
          return Promise.resolve(res)
        })
    }

    return res.json()
      .then((res) => {
        return Promise.reject(res)
      })
  }

  registerUser(data) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
      credentials: 'include'
    })
    .then((res) => {
      return this._checkResponse(res)
    })
  }

  loginUser(data) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
      credentials: 'include'
    })
    .then((res) => {
      return this._checkResponse(res)
    })
  }

  unathorize() {
    return fetch(`${this._baseUrl}/signout`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include'
    })
      .then((res) => {
        return this._checkResponse(res)
      })
  }

  changeUserData(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      body: JSON.stringify(data),
      headers: this._headers
    })
    .then((res) => {
      return this._checkResponse(res)
    })
  }

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      credentials: 'include'
    })
    .then((res) => {
      return this._checkResponse(res)
    })
  }

  saveMovie(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
      credentials: 'include',
    })
    .then((res) => {
      return this._checkResponse(res)
    })
  }

  deleteMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include'
    })
    .then((res) => {
      return this._checkResponse(res)
    })
  }
}

const mainApi = new MainApi()

export default mainApi
