import { Injectable } from '@angular/core';

import { moviesList } from '../../shared/moviesList';
import { IMovies } from '../../shared/imovies';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  movies: IMovies[];
  movie: IMovies;
  existingFavoritMovieList;

  addMovie = (movie) => {
    this.movies.unshift(movie);
  }

  deleteMovie = (movie) => {
    this.movies.forEach((item, index) => {
      if (item === movie) {
        this.movies.splice(index, 1)
      }
    });
  }

  getMovieList = (): IMovies[] => {
    this.movies = moviesList
    return this.movies;
  }

  getMovie = (movieId): IMovies => {
    moviesList.forEach((movie) => {
      if (movie.id === parseInt(movieId)) {
        this.movie = movie;
      }
    });
    return this.movie;
  }

  addToFavorits = (movie) => {
    this.existingFavoritMovieList = JSON.parse(localStorage.getItem('movielist')) || []
    this.existingFavoritMovieList.push(movie);
    localStorage.setItem('movielist', JSON.stringify(this.existingFavoritMovieList));
  }

  getToFavorits() {
    this.existingFavoritMovieList = JSON.parse(localStorage.getItem('movielist'));
    return this.existingFavoritMovieList;
  }

  removeFavorit(movie) {
    this.existingFavoritMovieList = JSON.parse(localStorage.getItem('movielist'));
    this.existingFavoritMovieList.forEach((item, index) => {
      if (item.id === movie.id) {
        this.existingFavoritMovieList.splice(index, 1)
        //console.log(movie.id)
      }
    });
    localStorage.removeItem('movielist');
    localStorage.setItem('movielist', JSON.stringify(this.existingFavoritMovieList));
  }

  constructor() { }
}
