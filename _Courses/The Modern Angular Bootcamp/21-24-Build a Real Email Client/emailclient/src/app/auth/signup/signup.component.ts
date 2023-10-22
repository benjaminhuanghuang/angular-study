import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//
import { matchPassword } from '../validators/match-password';
import { AuthService, SignupCredentials } from '../auth.service';
import { userNameValidator } from '../validators/unique-username';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/)
    ], [userNameValidator(this.authService)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    passwordConfirmation: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ])
  }, { validators: matchPassword });  //custom validator

  constructor(private router: Router,
    private authService: AuthService) { }


  onSubmit(): void {
    if (this.authForm.invalid) {
      return;
    }

    this.authService.signup(this.authForm.value as SignupCredentials).subscribe({
      next: (response) => {
        // Navigate to some other route
        this.router.navigateByUrl('/inbox');
      },
      error: ({ error }) => {
        if (error.username || error.password) {
          this.authForm.setErrors({ credentials: true });
        }
      }
    });
  }
}
