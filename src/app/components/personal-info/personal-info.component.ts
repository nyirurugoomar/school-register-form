import { Component,Input } from '@angular/core';
import country from '../../../../constant/country.json'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent {
  countries = country;

  @Input() formGroup! : FormGroup

}
