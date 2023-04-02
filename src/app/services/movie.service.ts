import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../Movie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url = "http://localhost:5000/movies";
  constructor( private fetch: HttpClient ) { }

  getMovies(): Observable<Movie[]>{
    return this.fetch.get<Movie[]>(this.url)
  }

}
