import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
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

  constructor(public authService: AuthService, private router: Router) {
    // Listen for route changes and close the navbar
    this.router.events.subscribe(() => {
      this.closeNavbar();
    });
    document.addEventListener('click', (event) => {
      const navbar = document.querySelector('.navbar-collapse');
      const button = document.querySelector('.navbar-toggler');
    
      if (navbar && button && !button.contains(event.target as Node) && !navbar.contains(event.target as Node)) {
        navbar.classList.remove('show');
      }
    });
  }


  closeNavbar() {
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar) {
      navbar.classList.remove('show'); // Close the navbar
    }
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
