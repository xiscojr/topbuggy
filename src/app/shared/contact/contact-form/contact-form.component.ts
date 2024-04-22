import { Component, NgModule } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule, NgIf } from '@angular/common';
import { ProductsService } from '../../main-modules/products/products.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  standalone: true,
  providers: [
    ProductsService
  ],
  imports: [
    TranslateModule,
    NgIf,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})

export class ContactFormComponent {
  contactForm: FormGroup;
  contactRequestSuccess = false;

  constructor(public translateService: TranslateService, private fb: FormBuilder, private productService: ProductsService) {

    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      phone: new FormControl('', [Validators.required, Validators.pattern("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$")]),
      message: new FormControl('', [Validators.required]),
      privacy: new FormControl(false, [Validators.required])
    });

  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get phone() { return this.contactForm.get('phone'); }
  get message() { return this.contactForm.get('message'); }
  get privacy() { return this.contactForm.get('privacy'); }

  sendContactEmail() {

    if (!this.contactForm.valid) {
      return;
    }
    this.contactRequestSuccess = true;
    this.productService.sendEmail(this.contactForm.value).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );

  }
}
