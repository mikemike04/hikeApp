import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss']
})
export class FlipCardComponent implements OnInit {

  toggleProperty = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.toggleProperty = !this.toggleProperty;
  }

}
