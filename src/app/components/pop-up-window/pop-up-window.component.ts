import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pop-up-window',
  templateUrl: './pop-up-window.component.html',
  styleUrls: ['./pop-up-window.component.css']
})
export class PopUpWindowComponent {
  @Input() movieInfo: any;
  @Output() onClose = new EventEmitter();

  closeDialog(){
    console.log(this.movieInfo)
    this.onClose.emit()
  }

}
