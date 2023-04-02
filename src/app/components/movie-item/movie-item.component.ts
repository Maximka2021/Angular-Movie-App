import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from "../../Movie"

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {
  @Input() movie: Movie;
  @Output() onClick = new EventEmitter();
  constructor(){}
  showPopUp(){
    this.onClick.emit(this.movie)
    let movieInfo = this.movie
  }
}
