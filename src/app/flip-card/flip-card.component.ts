import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss']
})
export class FlipCardComponent implements OnInit {

  toggleProperty: string = "Hola!";

  @Output() toggleEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.toggleEvent.emit(this.toggleProperty);
  }

}
