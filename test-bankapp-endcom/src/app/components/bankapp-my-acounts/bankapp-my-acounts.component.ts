import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/interfaces/card.model';
import { CardService } from './../../services/card/card.service';

@Component({
  selector: 'app-bankapp-my-acounts',
  templateUrl: './bankapp-my-acounts.component.html',
  styleUrls: ['./bankapp-my-acounts.component.scss']
})
export class BankappMyAcountsComponent implements OnInit {
  @Output() sendBoolean: EventEmitter<boolean> = new EventEmitter;

  constructor(private cardService: CardService) { }

  account: Card[] = [];
  classes = '';

  ngOnInit(): void {
    this.getCard();
  }

  getCard() {
    this.cardService.getCard()
      .subscribe((accounts) => {
        this.account = accounts.tarjetas;
      })
  }

  valueBoolean(val: boolean) {
    console.log(val);
    
    this.sendBoolean.emit(val)
  } 

}
