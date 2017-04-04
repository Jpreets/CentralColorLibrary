import { CanActivate } from '@angular/router';
// Angular
import { Injectable } from '@angular/core';

// Services
import { AuthService } from '.././service';

@Injectable()
export class AuthGuard implements CanActivate {
constructor(private authService: AuthService) {}

  canActivate() {
    return this.authService.isLoggedIn();
  }
}
