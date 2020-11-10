import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { faPlus, faStar, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { MoviesService } from '../../services/movies.service';

import { IMarvelMovies } from '../../../shared/imovies';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  movies: Observable<any>;

  //FontAwesome icons
  faPlus = faPlus;
  faStar = faStar;
  faTimes = faTimesCircle;

  isFormHidden: boolean = true;

  constructor(
    private moviesService: MoviesService,
  ) {  }

  ngOnInit(): void {
    this.moviesService.getMovieList().subscribe(response => {
      console.log("Response", response);
      this.movies = response;
    });
  }

}
