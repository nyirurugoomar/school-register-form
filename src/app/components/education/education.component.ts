import { Component, Input } from '@angular/core';
import program from '../../../../constant/programs.json'
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
   programs = program;

   @Input() educationForm!:FormGroup
}
