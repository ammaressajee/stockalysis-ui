export interface ContactForm {
    id?: number; // Optional since it's usually auto-generated
    fname: string;
    lname: string;
    email: string;
    contact_number: number;
    message: string;
  }