import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-element',
  templateUrl: './add-element.component.html',
  styleUrls: ['./add-element.component.scss']
})
export class AddElementComponent implements OnInit {

  hikeForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddElementComponent>) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.hikeForm = this.formBuilder.group({
      name: ['', Validators.required],
      start: ['', Validators.required],
      end: ['', Validators.required],
      length: ['', Validators.required],
      elevation: ['', Validators.required],
      date: ['', Validators.required]
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
