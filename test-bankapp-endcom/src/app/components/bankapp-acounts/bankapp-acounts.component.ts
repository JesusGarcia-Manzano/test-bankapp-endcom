import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bankapp-acounts',
  templateUrl: './bankapp-acounts.component.html',
  styleUrls: ['./bankapp-acounts.component.scss']
})
export class BankappAcountsComponent implements OnInit {

  constructor() { }

  valBoolean: boolean;

  ngOnInit(): void {
  }

  receive(val: boolean) {
    this.valBoolean = val;
  }
}
