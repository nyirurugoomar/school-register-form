import { Component,inject } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  firstFormGroup: FormGroup;
  guardianFormGroup: FormGroup;
  educationFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.firstFormGroup = this._formBuilder.group({
      fullname: ['',[Validators.required, Validators.minLength(3),Validators.pattern('^[a-zA-Z ]*$')]],
      dob1: ['', Validators.required],
      gender: ['', Validators.required],
      nationality: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone1: ['', [Validators.required,Validators.pattern('^[0-9]{10}$')]],
      idnumber: ['', [Validators.required,Validators.pattern('^[0-9]{16}$')]]
    });

    this.guardianFormGroup = this._formBuilder.group({
      fullname: ['',[Validators.required, Validators.minLength(3),Validators.pattern('^[a-zA-Z ]*$')]],
      email: ['', [Validators.required, Validators.email]],
      phone2: ['', [Validators.required,Validators.pattern('^[0-9]{10}$')]],
      occupation: ['', Validators.required]
    });

    this.educationFormGroup = this._formBuilder.group({
      program: ['', Validators.required],
      nameOfschool:['', Validators.required],
      startDate:['', Validators.required]



    });

    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
    });
  }
}
