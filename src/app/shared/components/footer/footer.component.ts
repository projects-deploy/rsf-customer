import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Newsletter } from 'src/app/models/Newsletter';
import { NewsletterService } from 'src/app/services/newsletter/newsletter.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  newsletterForm!: FormGroup;
  disabledBtn: boolean = true;

  constructor(
    private fb: FormBuilder,
    private newsletterService: NewsletterService
  ) { }

  ngOnInit(): void {
    this.newsletterForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get l() {
    return this.newsletterForm.controls;
  }

  subscribeNewsletter(email: Newsletter) {
    if (this.disabledBtn) {

      this.newsletterService.createNewsletter(email).subscribe({
        next: (data) => {
          console.log('SUCESSO AO CADASTRAR NEWSLETTER DATA', data);
          this.newsletterForm.reset();
          this.newsletterForm.controls['email'].setValidators([Validators.nullValidator]);
          this.newsletterForm.controls['email'].updateValueAndValidity();
          this.disabledBtn = false;
        },
        error: (err) => {
          console.log('SUCESSO AO CADASTRAR NEWSLETTER ERRR', err);
        }
      });
    } else {
      this.newsletterForm.reset();
    }
  }
}
