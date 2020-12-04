import { Component, OnInit } from '@angular/core';
import { Balance } from 'src/app/interfaces/balance.model';
import { BalanceService } from './../../services/balance/balance.service';

@Component({
  selector: 'app-bankapp-balance',
  templateUrl: './bankapp-balance.component.html',
  styleUrls: ['./bankapp-balance.component.scss']
})
export class BankappBalanceComponent implements OnInit {

  constructor(private balanceService: BalanceService) { }

  balance: Balance[]

  ngOnInit(): void {
    this.getBalance();
  }

  getBalance() {
    this.balanceService.getBalance()
      .subscribe((balances) => {
        this.balance = balances.saldos;
      })
  }

}
