// Angular
import { Injectable } from '@angular/core';

// Services
import { AuthService } from '.././service';

@Injectable()
export class AuthGuard {
constructor(private authService: AuthService) {}

  canActivate() {
    return this.authService.isLoggedIn();
  }
}