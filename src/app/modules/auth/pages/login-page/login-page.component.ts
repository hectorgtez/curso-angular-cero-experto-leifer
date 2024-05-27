import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {
  private _authService = inject(AuthService);
  private _router = inject(Router);
  private _cookieService = inject(CookieService)

  errorSesion: boolean = false;
  formLogin: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12)
      ]),
    });
  }

  sendLogin(): void {
    this.errorSesion = false;
    const { email, password } = this.formLogin.value;

    this._authService.sendCredentials(email, password)
      .subscribe({
        next: ({ tokenSession }) => {
          this._router.navigate(['/']);
          this._cookieService.set('token', tokenSession, 4, '/');
          console.log('Sesión iniciada correctamente!');
        },
        error: error => {
          this.errorSesion = true;
          console.log('Usuario y/o contraseña incorrectos');
        }
      });
  }
}
