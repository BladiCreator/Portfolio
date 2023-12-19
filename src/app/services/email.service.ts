import { Injectable } from '@angular/core';
import { EmailForm } from '../interfaces/email-form.interface';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  //TODO: hacer que devuelva un booleano para luego mostrar un mensaje cuando se halla enviado el correo
  //TODO: hacer que el usuario verifique que es humano usando Captcha
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
