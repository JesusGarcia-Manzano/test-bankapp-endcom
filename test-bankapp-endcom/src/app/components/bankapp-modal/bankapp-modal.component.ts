import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bankapp-modal',
  templateUrl: './bankapp-modal.component.html',
  styleUrls: ['./bankapp-modal.component.scss']
})
export class BankappModalComponent implements OnInit {
  @Input() receiveBool: boolean

  constructor() {  }

  changeBool() {
    this.receiveBool = false;
  }

  ngOnInit(): void {
  }

}
