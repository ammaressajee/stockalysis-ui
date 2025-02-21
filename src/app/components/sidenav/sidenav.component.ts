import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  showSideNav = false;
  user$ = this.authService.user$; // user$ is now safely typed
  isAuthenticated$ = this.authService.isAuthenticated$;

  constructor(public authService: AuthService) {

  }

  public toggleSideNav() {
    this.showSideNav = !this.showSideNav;
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit(): void {
  this.authService.isAuthenticated$.subscribe((isAuth) => {
    console.log('User authenticated:', isAuth);
  });

  this.authService.user$.subscribe((user) => {
    console.log('User info:', user);
  });
}
}
