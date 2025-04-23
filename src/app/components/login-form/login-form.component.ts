import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { error } from 'console';

interface loginObject {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  formSubmitted: boolean = false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  constructor() {
    this.formSubmitted = false
  }
  onSubmit() {
    this.formSubmitted = true;
    if(this.loginForm.valid) {
      const result: loginObject = this.loginForm.value;
      console.log(result);
    } else{
      console.log("Formulaire s'est mal passé");
      console.log(this.loginForm.get('email')?.errors)
      console.log(this.loginForm.get('password')?.errors)
    }

  }

  get emailErrors() {
    return this.loginForm.get('email')?.errors
  }

  get emailRequired() {
    if(this.emailErrors) {
      return this.emailErrors['required']
    }else false;
  }

  get passwordErrors() {
    return this.loginForm.get('password')?.errors
  }

  get isEmailTouched() {
    return this.loginForm.get('email')?.touched
  }

  get isEmailTouchedOrFormSubmit() {
      return this.isEmailTouched || this.formSubmitted
  }

  
}
