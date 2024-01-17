import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs';
import { Customer } from 'src/app/models/Customer';
import { DataRxjsService } from '../../services/rxjs/data-rxjs.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  @Input() customer!: Customer;
  customerForm!: FormGroup;
  teste: boolean = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private rxjs: DataRxjsService,
  ) { }

  ngOnInit(): void {
    this.initForm();
    console.log('customer', this.customer);

    if (this.customer != null || this.customer != undefined) {
      this.updateForm(this.customer);
    }
  }

  initForm() {
    this.customerForm = this.fb.group({
      personaldata: this.fb.group({
        cpf: ['', [Validators.required]],
        name: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        surname: ['', [Validators.required]],
        birth_date: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
      }),
      address: this.fb.group({
        cep: ['', [Validators.required]],
        numero: ['', [Validators.required]],
        bairro: ['', [Validators.required]],
        localidade: ['', [Validators.required]],
        logradouro: ['', [Validators.required]],
        complemento: [''],
        uf: ['', [Validators.required]],
      })
    });

    this.customerForm.statusChanges.pipe(distinctUntilChanged()).subscribe(newStatus => {
      let value = newStatus === "VALID";
      this.rxjs.crtlCheckoutForm(value);
    });
  }

  updateForm(values: Customer) {
    this.customerForm.patchValue({
      personaldata: {
        cpf: values.cpf,
        name: values.name,
        phone: values.phone,
        surname: values.surname,
        birth_date: values.birth_date,
        email: values.email,
      },
      address: {
        cep: values.cep,
        numero: values.numero,
        bairro: values.bairro,
        localidade: values.localidade,
        logradouro: values.logradouro,
        complemento: values.complemento,
        uf: values.uf,
      }
    });
  }

  getAddress() {
    const cep = this.customerForm.get('address.cep')?.value;
    this.http.get(`https://viacep.com.br/ws/${cep}/json/`).subscribe(address => {
      this.customerForm.patchValue({ address });
    });
  }

  get f(): any {
    return this.customerForm.controls;
  }
}

interface CustomerForm {
  personaldata: {
    id?: number;
    cpf: string;
    name: string;
    email: string;
    phone: string;
    birth_date: Date;
  },
  address: {
    cep: string;
    numero: string;
    bairro: string;
    localidade: string;
    logradouro: string;
    complemento: string;
    uf: string;
  }
}
