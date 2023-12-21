import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'contact-me-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {
  private _MAX_LENGTH: number = 920;

  
  public get MAX_LENGTH() : number {
    return this._MAX_LENGTH;
  }
  

  contactMeForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.maxLength(this.MAX_LENGTH)]],
  });

  private isSubmitted: boolean = false;

  constructor(private fb: FormBuilder, private emailService: EmailService) { }

  @ViewChild('notSendedMessageDialog', { static: true }) notSendedMessageDialog?: ElementRef<HTMLDialogElement>;
  @ViewChild('sendedMessageDialog', { static: true }) sendedMessageDialog?: ElementRef<HTMLDialogElement>;

  //TODO:Cuando se trate de enviar un correo se verifica si es humano usando Captcha antes de enviar el correo
  onSubmit() {
    if (this.contactMeForm.valid && !this.isSubmitted) {
      let sended: boolean = this.emailService.send(this.contactMeForm.value);
      if (!sended) {
        this.notSendedMessageDialog?.nativeElement.showModal();
      } else {
        this.sendedMessageDialog?.nativeElement.showModal();
      }
      this.isSubmitted = sended;
      this.contactMeForm.reset();
    }
  }

  isTouched(name: string): boolean {
    return (this.contactMeForm.get(name)?.dirty || this.contactMeForm.get(name)?.touched) ?? false;
  }

  validating(name: string): boolean {
    return (this.contactMeForm.get(name)?.invalid && this.isTouched(name)) ?? false;
  }

  hasRequiredError(name: string): boolean {
    return (this.contactMeForm.get(name)?.hasError('required') && this.isTouched(name)) ?? false;
  }
}
