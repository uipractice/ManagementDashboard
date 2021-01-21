import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from 'src/services/auth.service';

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private routerNavigate: Router
  ) {}

  canActivate(): boolean {
    if (!this.authService.isAuthenticate()) {
      this.routerNavigate.navigate(["/login"]);
      return false;
    }
    return true;
  }
}