import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hike-app';

  

  constructor(
  ) { }

  ngOnInit(): void {
  }

  message:string = "1";

  receiveMessage($event: any) {
    this.message = $event;
    //console.log(this.message);
  }

  hello(){
    console.log(this.message);
  }

}
