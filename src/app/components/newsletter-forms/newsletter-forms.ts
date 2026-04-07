import { Component, signal, Signal } from '@angular/core';
import { BtnPrimary } from '../btn-primary/btn-primary';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsletterService } from '../../services/newsletter';

@Component({
  selector: 'app-newsletter-forms',
  standalone: true,
  imports: [
    BtnPrimary,
    ReactiveFormsModule
  ],
  providers: [
    NewsletterService
  ],
  templateUrl: './newsletter-forms.html',
  styleUrl: './newsletter-forms.scss',
})

export class NewsletterForms {
  newsletterForm!: FormGroup;
  loading = signal(false);

  constructor(private service: NewsletterService) {
    this.newsletterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    this.loading.set(true);
    if (this.newsletterForm.valid) {
      this.service.sendData(this.newsletterForm.value.name, this.newsletterForm.value.email).subscribe({
        next: () => {
          this.newsletterForm.reset
          this.loading.set(false);
        },
        error: () => {
          console.log("Erro no BackEnd")
        }
      })
    }
  }
}
