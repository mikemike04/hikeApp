import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ValidatorService } from 'src/app/services/validator-service.service';

@Component({
  selector: 'app-add-element',
  templateUrl: './add-element.component.html',
  styleUrls: ['./add-element.component.scss']
})
export class AddElementComponent implements OnInit {

  minElevation: number = 0;
  maxElevation: number = 13000;
  hikeForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private validatorService: ValidatorService,
    public dialogRef: MatDialogRef<AddElementComponent>,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.hikeForm = this.formBuilder.group({
      name: ['', {
        validators: [
          Validators.compose([
            Validators.required,
            Validators.minLength(4)
          ])
        ]
      }],

      start: ['', {
        validators: [
          Validators.compose([
            Validators.required,
            Validators.minLength(4)
          ])
        ]
      }],

      end: ['', {
        validators: [
          Validators.compose([
            Validators.required,
            Validators.minLength(4)
          ])
        ]
      }],

      length: ['', {
        validators: [
          Validators.compose([
            Validators.required,
            this.validatorService.lengthValidator(this.minElevation)
          ])
        ]
      }],

      elevation: ['', {
        validators: [
          Validators.compose([
            Validators.required,
            this.validatorService.elevationValidator(this.minElevation, this.maxElevation)
          ])
        ]
      }],
      date: ['', Validators.required]
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
