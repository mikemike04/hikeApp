import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  images: any[] = [
    '../../../assets/images/Everest_Mount.jpg',
    '../../../assets/images/Garboave_Forest.jpg',
    '../../../assets/images/Mount_Kili.jpg',
    '../../../assets/images/Mount_Rushmore.jpg',
    '../../../assets/images/Padurea_Neagra.jpg',
    '../../../assets/images/Tampa_Brasov.jpg',
  ];

  posts: any[] = [];

  constructor() { }

  ngOnInit(): void {

    // const carouselImages = document.querySelector('.carousel__images');
    // const carouselButtons = document.querySelectorAll('.carousel__button');
    // const numberOfImages = this.images.length;
    // let imageIndex = 1;
    // let translateX = 0;

    // carouselButtons.forEach(button => {
    //   button.addEventListener('click', (event) => {
    //     if ((event?.target as HTMLInputElement)?.id === 'previous') {
    //       if (imageIndex !== 1) {
    //         imageIndex--;
    //         translateX += 300;
    //       }
    //     } else {
    //       if (imageIndex !== numberOfImages) {
    //         imageIndex++;
    //         translateX -= 300;
    //       }
    //     }

    //     (carouselImages as HTMLInputElement)!.style!.transform = `translateX(${translateX}px)`;
    //   });
    // });

  }

}
