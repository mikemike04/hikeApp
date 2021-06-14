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

  places = new Map([
    [this.images[0], 'Everest Mount'],
    [this.images[1], 'Garboave Forest'],
    [this.images[2], 'Mount Kilimanjaro'],
    [this.images[3], 'Mount Rushmore'],
    [this.images[4], 'Black Forest'],
    [this.images[5], 'Tampa Brasov']
  ])


  posts: any[] = [];

  currentRate: any[] = [
    3.9,
    2.45,
    5,
    3.9,
    4.2,
    4.36
  ]

  messageRating: any = "Rating:"

  texts: any[] = [
    "Discover New Places",
    "Explore The World",
    "Feel The Freedoom",
    "Be Unique."
  ];

  constructor() { }

  OnInit() {
    console.log(this.places.get(this.images[1]));
  }

  toggleProperty: any[] = [
    true,
    true,
    true,
    true,
    true,
    true
  ];

  toggle(number: number) {
    this.toggleProperty[number] = !this.toggleProperty[number];
  }

  setData() {
    //console.log("Salut!");
    this.messageRating = "Rated:";
    console.log(this.messageRating);
    // Add rate to database
  }

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
