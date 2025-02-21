import { Component } from '@angular/core';
import { ContactUsService } from '../../../services/contact-us.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-message-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-dashboard.component.html',
  styleUrl: './message-dashboard.component.scss'
})
export class MessageDashboardComponent {

  isAuthenticated = false;
  public messages!: any;
  constructor(private contactService: ContactUsService, private http: HttpClient, private authService: AuthService) {

    this.getContactMessages();

  }

  getContactMessages(): void {
    this.contactService.getContactFormMessages().subscribe(
      (data) => {
        this.messages = data;
        console.log(this.messages); // Debugging
      },
      (error) => {
        console.error('Error fetching contact messages:', error);
      }
    );
  }
  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe((isAuth) => {
      this.isAuthenticated = isAuth
    });
  }
}
