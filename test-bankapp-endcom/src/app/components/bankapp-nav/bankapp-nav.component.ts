import { Component, OnInit } from '@angular/core';
import { AccountService } from './../../services/account/account.service';
import { Account } from './../../interfaces/account.model';

@Component({
  selector: 'app-bankapp-nav',
  templateUrl: './bankapp-nav.component.html',
  styleUrls: ['./bankapp-nav.component.scss']
})
export class BankappNavComponent implements OnInit {

  constructor(private accountService: AccountService) { }
  account: Account[] = []

  ngOnInit(): void {
    this.getAccount();
  }

  getAccount() {
    this.accountService.getAccount()
      .subscribe((accounts) => {
        this.account = accounts.cuenta;
      })
  }

}
