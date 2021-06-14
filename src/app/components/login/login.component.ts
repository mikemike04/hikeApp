import { unescapeIdentifier } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public firebaseService: FirebaseService,
    private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('user') !== null) {
      this.firebaseService.isLoggedIn = true;
    } else {
      this.firebaseService.isLoggedIn = false;
    }

    console.log(localStorage.getItem('user') !== null);

  }

  async loginUser(email: string, password: string) {
    await this.firebaseService.signIn(email, password);

    if (this.firebaseService.isLoggedIn) {

      console.log(localStorage.user);
      this.router.navigateByUrl("/home/main-page");
    } else {

      console.log("none logged in");
    }
  }

  public login(form: NgForm): void {

  }

  public openRegister(): void {

  }

}
