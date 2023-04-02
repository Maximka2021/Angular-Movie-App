import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../Movie';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {

  movies: Movie[] = [];
  newArr: Movie[] = [];
  genre: string = "";
  show: boolean = false;
  movieInfo = {};
  constructor(private movieService: MovieService){}

  ngOnInit(): void{
    this.movieService.getMovies().subscribe((data) => this.movies = this.newArr = data)
  }

  changeGenre(event: any){
    this.genre = event.target.value
    if(this.genre === "All"){
      this.newArr = this.movies;
    }else{
      this.newArr = this.movies.filter(movie => movie.genres.includes(this.genre))
      console.log(this.newArr)
    }
  }

  changeInput(event: any){
    this.newArr = this.movies.filter(movie => movie.title.includes(event))
  }

  showInfo(movie: any){
    this.show = true;
    this.movieInfo = movie;
  }

  closeDialog(){
    this.show = false;
  }

}
