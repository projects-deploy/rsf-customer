import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/Customer';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  @Input() customer!: Customer;
  customerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();
    console.log('customer', this.customer);
  }

  initForm() {
    this.customerForm = this.fb.group({
      uf:['', [Validators.required]],
      cpf:['', [Validators.required]],
      cep:['', [Validators.required]],
      name:['', [Validators.required]],
      email:['', [Validators.required]],
      phone:['', [Validators.required]],
      numero:['', [Validators.required]],
      bairro:['', [Validators.required]],
      localidade:['', [Validators.required]],
      logradouro:['', [Validators.required]],
      complemento:['', [Validators.required]],
      birth_date: ['', [Validators.required]],
    });
  }

}
