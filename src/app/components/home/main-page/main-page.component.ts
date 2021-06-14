import { Component, OnInit } from '@angular/core';

// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  images: any[] = [
    '../../../assets/images/Everest_Mount.jpg',
    '../../../assets/images/Garboave_Forest.jpg',
    '../../../assets/images/Mount_Kili.jpg',
    '../../../assets/images/Mount_Rushmore.jpg',
    '../../../assets/images/Padurea_Neagra.jpg',
    '../../../assets/images/Tampa_Brasov.jpg',
  ];

  posts: any[] = [];


  texts:any[] = [
    "Discover New Places",
    "Explore The World",
    "Feel The Freedoom",
    "Be Unique."
  ];

  constructor() { }

  ngOnInit(): void {
    const target = document.querySelector('.typing');
    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: '#fff'
    })
    
    writer
      .removeCursor()
      .type(this.texts[0])
      .rest(500)
      .changeOps({ deleteSpeed: 80 })
      .remove((this.texts[0] as string).length)
      .type(this.texts[1])
      .rest(500)
      .remove((this.texts[1] as string).length)
      .type(this.texts[2])
      .rest(500)
      .changeOps({ deleteSpeed: 80 })
      .remove((this.texts[2] as string).length)
      .type(this.texts[3])
      .rest(500)
      .changeOps({ deleteSpeed: 100 })
      .rest(10000)
      .clear()
      .start()
  }

}
