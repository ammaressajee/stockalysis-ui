import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactForm } from '../models/contact-form';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  private baseUrl = environment.dev.API_URL; // Flask backend URL
  private postContactUrl = this.baseUrl + '/contact';
  
  constructor(private http: HttpClient) {}

  getContactFormMessages(): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}/contact`);
  }

  submitContactForm(contactData: ContactForm): Observable<any> {
    return this.http.post<any>(this.postContactUrl, contactData);
  }
}
