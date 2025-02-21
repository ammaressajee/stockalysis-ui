import { Injectable } from '@angular/core';
import { AuthService as Auth0Service, User } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$!: Observable<User | null>;
  isAuthenticated$!: Observable<boolean>;

  constructor(private auth0: Auth0Service) {
    // Filter out `undefined` from user$
    this.user$ = this.auth0.user$.pipe(
      filter((user): user is User => user !== undefined)
    );
    this.isAuthenticated$ = this.auth0.isAuthenticated$;
  }

  /** 🔹 Login Method */
  login(): void {
    this.auth0.loginWithRedirect();
  }

  /** 🔹 Logout Method */
  logout(): void {
    this.auth0.logout({ logoutParams: { returnTo: window.location.origin } });
  }

  /** 🔹 Get User Info */
  getUser(): Observable<User | null> {
    return this.user$.pipe(
      tap(user => console.log('User:', user)) // Debugging: Log user data
    );
  }
}
