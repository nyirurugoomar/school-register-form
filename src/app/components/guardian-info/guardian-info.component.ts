import { Component,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-guardian-info',
  templateUrl: './guardian-info.component.html',
  styleUrl: './guardian-info.component.css'
})
export class GuardianInfoComponent {

  @Input() guardianForm!:FormGroup;
}
