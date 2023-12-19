import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailForm } from '../../interfaces/email-form.interface';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'contact-me-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {
  contactMeForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.maxLength(120)]],
  });

  private isSubmitted: boolean = false;

  constructor(private fb: FormBuilder, private emailService: EmailService) { }

  onSubmit() {
    if (this.contactMeForm.valid && !this.isSubmitted) {
      let sended: boolean = this.emailService.send(this.contactMeForm.value);
      if (!sended) {
        console.log(sended);

      }
      this.isSubmitted = sended;
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
