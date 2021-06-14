import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  isSignedIn: boolean = false;
  constructor(public firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }

  public login(form: NgForm): void {

  }

  async onSignup(email: string, password: string) {
    await this.firebaseService.signUp(email, password);
    if (this.firebaseService.isLoggedIn) {
      this.isSignedIn = true;
    }

    console.log(this.isSignedIn);
  }

}
