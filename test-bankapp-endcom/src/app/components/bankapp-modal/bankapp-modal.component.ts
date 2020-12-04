import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bankapp-modal',
  templateUrl: './bankapp-modal.component.html',
  styleUrls: ['./bankapp-modal.component.scss']
})
export class BankappModalComponent implements OnInit {
  @Input() receiveBool: boolean

  constructor(private formB: FormBuilder) { 
    this.buildForm();
   }

  form: FormGroup;

  changeBool() {
    this.receiveBool = false;
  }

  ngOnInit(): void {
  }

  saveCard(event: Event) {
    event.preventDefault();
    console.log(this.form.value);
    alert('[{ ' + ' numero de tarjeta: ' + 
    this.form.value.numeroTarjeta + ', cuenta: ' + 
    this.form.value.cuenta + ', issues: ' +
    this.form.value.issues + ', nombre de la tarjeta: ' +
    this.form.value.nombreTarjeta + ', marca: ' +
    this.form.value.marca + ', estatus: ' +
    this.form.value.estatus + ', saldo: ' +
    this.form.value.saldo + ', tipo de suenta: ' +
    this.form.value.tipoCuenta + '}]')
    
  }

  buildForm() {
    this.form = this.formB.group({
      numeroTarjeta: ['', [Validators.required]],
      cuenta: ['', [Validators.required]],
      issues: ['', [Validators.required]],
      nombreTarjeta: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      estatus: ['', [Validators.required]],
      saldo: ['', [Validators.required]],
      tipoCuenta: ['', [Validators.required]]
    })
  }



}
