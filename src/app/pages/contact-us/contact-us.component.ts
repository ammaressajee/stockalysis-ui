import { Component, inject } from '@angular/core';
import { ContactUsService } from '../../services/contact-us.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactUsService) {
    this.contactForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact_number: ['', [Validators.required,
      Validators.pattern('^[0-9]{10}$')]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.contactService.submitContactForm(this.contactForm.value).subscribe({
        next: (response) => console.log('Form submitted successfully', response),
        error: (error) => console.error('Error submitting form', error)
      });
    }
  }
}

