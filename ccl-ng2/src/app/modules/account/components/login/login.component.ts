import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { AuthStatus } from './';
import { Exception, ExceptionRegistry, RegexExpression } from './../../../../shared/constant';
import { LoginResponse } from './../../../../shared/model/login-response.model';
import { AuthService } from './../../../../shared/service/auth.service';
import { LoginRequest } from './../../../../shared/model/login-request.model';
import { StorageUtil, StorageType } from './../../../../shared/util';
import { StorageKeys } from './../../../../shared/constant/storage-key.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private _authStatus_ = AuthStatus;
  public _loginForm: FormGroup;
  public _authStatus: AuthStatus;
  public _authenticatedUserSubs: Subscription;

  constructor(private _router: Router, private _authService: AuthService) {
    this._loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(RegexExpression.EMAIL_REGEX)]),
      password: new FormControl('', [Validators.required, Validators.nullValidator])
    });
  }

  ngOnInit() {
  }

  onLoginFormSubmit(): void {
    if (this._loginForm.invalid) {
      return;
    }

    // New login request
    let loginRequest = new LoginRequest(
      this._loginForm.controls['email'].value,
      this._loginForm.controls['password'].value
    );
    this.doAuthentication(loginRequest);
  }

  doAuthentication(loginRequest: LoginRequest): void {
    // Try to authenticate the login request
    this._authenticatedUserSubs = this._authService.authenticate(loginRequest).subscribe(
      (data: LoginResponse) => {
        this._authStatus = AuthStatus.SUCCESS;
        console.log({ type: 'SUCCESS', message: 'Authentication successful, loading the dashboard' });
        this.saveUserAndRedirect(data);
      },
      (ex: Exception) => {
        if (ex === ExceptionRegistry.UNAUTH_ACC_DENIED) {
          this._authStatus = AuthStatus.FAILED;
          console.log({ type: 'ERROR', message: ex.message });
        }
      }
    );
  }

  saveUserAndRedirect(user: LoginResponse): void {
    StorageUtil.setAttribute(StorageType.SESSION, StorageKeys.AUTH_TOKEN, user.token);
    StorageUtil.setAttribute(StorageType.SESSION, StorageKeys.LOGGED_IN_USER, user);
    this._router.navigate(['dashboard']);
  }
}
