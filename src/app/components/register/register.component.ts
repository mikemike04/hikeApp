import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ValidatorService } from 'src/app/services/validator-service.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent?.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  isSignedIn: boolean = false;
  registerGroup: FormGroup = new FormGroup({});
  matcher = new MyErrorStateMatcher();

  constructor(public firebaseService: FirebaseService,
    private router: Router,
    private validatorService: ValidatorService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.initForm();
  }

  public login(form: NgForm): void {

  }

  async onSignup(email: string, password: string) {
    await this.firebaseService.signUp(email, password);
    if (this.firebaseService.isLoggedIn) {
      this.isSignedIn = true;
      this.router.navigateByUrl("/home/main-page");

    }

    console.log(this.isSignedIn);
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    const password = group.get('passControl')?.value;
    const confirmPassword = group.get('confirmPassControl')?.value;

    return password === confirmPassword ? null : { notSame: true }
  }

  initForm() {

    this.registerGroup = this.formBuilder.group({

      firstNameControl: ['', {
        validators: [
          Validators.compose([
            Validators.required,
            Validators.pattern('^[a-zA-Z ]*$')
          ])
        ]
      }],

      lastNameControl: ['', {
        validators: [
          Validators.compose([
            Validators.required,
            Validators.pattern('^[a-zA-Z ]*$')
          ])
        ]
      }],

      emailControl: ['', {
        validators: [
          Validators.compose([
            Validators.required,
            this.validatorService.emailValidator
          ])
        ]
      }],

      passControl: ['', {
        validators: [
          Validators.compose([
            Validators.required,
            Validators.minLength(6),
            this.validatorService.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
            this.validatorService.patternValidator(/\d/, { hasNumber: true })

          ])
        ]
      }],

      confirmPassControl: ['', {
        validators: [
          Validators.compose([
            Validators.required,
            Validators.minLength(6),
            this.validatorService.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
            this.validatorService.patternValidator(/\d/, { hasNumber: true })

          ])
        ]
      }]

    }, { validator: this.checkPasswords });
  }

}
