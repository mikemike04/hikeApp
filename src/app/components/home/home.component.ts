import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('mapBtn')
  mapBtn!: ElementRef;

  subs: Subscription[] = [];
  posts: any[] = [];
  activeButton: string = "homeButton";

  images: any[] = [
    '../../../assets/images/Everest_Mount.jpg',
    '../../../assets/images/Garboave_Forest.jpg',
    '../../../assets/images/Mount_Kili.jpg',
    '../../../assets/images/Mount_Rushmore.jpg',
    '../../../assets/images/Padurea_Neagra.jpg',
    '../../../assets/images/Tampa_Brasov.jpg'
  ];

  testFolder = '../../../assets/images/';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onHomeClick(homeButton: string): void {
    this.router.navigateByUrl("/home/main-page");
    this.setActiveButton(homeButton);
  }

  onMapClick(mapButton: string): void {
    this.router.navigateByUrl("/home/trips");
    this.setActiveButton(mapButton);

  }

  onLogoClick(): void {
    this.router.navigateByUrl("/login");
  }

  onTravelClick(travelBtn: string): void {
    this.setActiveButton(travelBtn);
  }

  onNotificationClick(notBtn: string): void {
    this.setActiveButton(notBtn);
  }

  onProfileClick(profileBtn: string): void {
    this.setActiveButton(profileBtn);
  }

  isActive(buttonName: string): boolean {
    return this.activeButton === buttonName;
  }

  setActiveButton(buttonName: string): void {
    this.activeButton = buttonName;
  }
  //fs = require('fs');

  //images: any[] = require().readdir(this.testFolder);





  //user: UserData;

  // async ngOnInit(): Promise<void> {
  //   this.subs.push(this.postService.getAllPosts().subscribe(async (posts) => {
  //     this.posts = posts;
  //     console.log(posts);
  //   }));

  //   this.subs.push(this.authService.CurrentUser().subscribe(user => {
  //     this.user = user;
  //     console.log(user);
  //   }));

  // }

  //doAnimation

  postMessage(form: NgForm): void {

  }

  //   const {message} = form.value;
  //   this.postService.postMessage(message,
  //     `${this.user.firstName} ${this.user.lastName}`,
  //     {
  //       avatar: this.user.avatar,
  //       lastName: this.user.lastName,
  //       firstname: this.user.firstName
  //     },
  //   );
  //   form.resetForm();
  // }

  // logout(): void {
  //   this.authService.Logout();
  // }

}
