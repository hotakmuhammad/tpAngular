import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UsersService } from '../../service/users/users.service';
import { IUsers } from '../../interface/IUsers';
import { error } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration-form',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css'
})
export class RegistrationFormComponent implements OnInit {

  registrationForm!: FormGroup;
  users: IUsers[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
      this.registrationForm = this.formBuilder.group({

        name: ['', Validators.required],
        firstName: ['', Validators.required],
        email: ['', [Validators.required , Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      }, {
        validators: this.passwordMatchValidator,
      })
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };

  }

  addUser(user: IUsers) {
    this.userService.addUser(user)
    .subscribe({
      next: (response: IUsers) => {
        console.log('User add: ',response)
        this.users.push(response);
      },
      error: (error: any)=> {
        console.log('Error adding user:', error)
      }

    });
  }
  onSubmit() {
    if(this.registrationForm.valid) {
      const formData = this.registrationForm.value;
      const userData: IUsers = {
        // id: 0,
        name: formData.name,
        firstName: formData.firstName,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      };
      this.addUser(userData);
      this.registrationForm.reset();
    } else {
      console.log('Form is invalid');
    }

  }
}
