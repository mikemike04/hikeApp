import { unescapeIdentifier } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ValidatorService } from 'src/app/services/validator-service.service';
import { RegisterComponent } from '../register/register.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  hidePass = true;

  constructor(public firebaseService: FirebaseService,
    private router: Router,
    private validatorService: ValidatorService,
    private formBuilder: FormBuilder,
    private matDialog: MatDialog) { }

  ngOnInit(): void {
    if (localStorage.getItem('user') !== null) {
      this.firebaseService.isLoggedIn = true;
    } else {
      this.firebaseService.isLoggedIn = false;
    }

    this.loginForm = this.formBuilder.group(
      {
        userEmail: ['', {
          validators: [
            Validators.compose([
              Validators.required,
              Validators.minLength(6),
              this.validatorService.emailValidator
            ])
          ]
        }
        ],

        userPass: ['', {

          validators: [
            Validators.compose([
              Validators.required,
              Validators.minLength(6),
            ])
          ]
        }]
      }
    );

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
    const dialogRef = this.matDialog.open(RegisterComponent, {
      role: 'dialog',
      height: '480px',
      width: '480px'
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   const {fname, lname, email, password, avatar} = result;

    //   if (result !== undefined) {
    //     this.authService.SignUp(email, password, fname, lname, avatar);
    //   }

    //   return;
    // });
  }

}
