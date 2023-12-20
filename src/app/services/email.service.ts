import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  send(emailForm: any): boolean {
    let sended: boolean = true;
    emailjs.send(environment.service_id, environment.template_id, {
      from_name: emailForm.name,
      from_email: emailForm.email,
      message: emailForm.message,
    }, environment.user_id).then((response: EmailJSResponseStatus) => {
      sended = true;
    }, () => {
      sended = false;
    });
    return sended;
  }
}
