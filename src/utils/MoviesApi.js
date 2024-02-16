class MoviesApi {
  constructor() {
    this._baseUrl = 'https://api.nomoreparties.co/beatfilm-movies';
  }

  _checkResponse(res) {
    if(res.ok) {
      return res.json()
        .then((res) => {
          return Promise.resolve(res);
        });
    }

    return res.json()
      .then((res) => {
        return Promise.reject(res);
      });
  }

  getFilms() {
    return fetch(this._baseUrl)
      .then((res) => {
        return this._checkResponse(res);
      });
  }
}

const moviesApi = new MoviesApi();

export default  moviesApi;
