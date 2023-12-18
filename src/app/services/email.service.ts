import { Injectable } from '@angular/core';
import { EmailForm } from '../interfaces/email-form.interface';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  //!Usar variables de entorno para evitar que vean las key
  //TODO: hacer que devuelva un booleano para luego mostrar un mensaje cuando se halla enviado el correo
  //TODO: hacer que el usuario verifique que es humano usando Captcha
  send(emailForm: any): boolean {
    let sended: boolean = true;
    emailjs.send("service_0t2m3we", "template_3yk79uh", {
      from_name: emailForm.name,
      from_email: emailForm.email,
      message: emailForm.message,
    }, "4o2Y6-Rf3Za0jos4s" ).then((response: EmailJSResponseStatus) => {
      sended = true;
    }, () => {
      sended = false;
    });
    return sended;
  }
}
