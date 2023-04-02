import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  search: string;
  @Output() onChange = new EventEmitter<string>()
  @Output() onInputChange = new EventEmitter<string>()
  

  onValueChange(event: any){
    this.onChange.emit(event)
  }

  onKeyUp(){
    this.onInputChange.emit(this.search)
  }

}
