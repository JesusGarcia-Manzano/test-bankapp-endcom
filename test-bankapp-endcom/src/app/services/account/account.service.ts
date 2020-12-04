import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from './../../interfaces/account.model';
import { environment } from './../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAccount() {
    return this.http.get<Account[]>(environment.account)
  }
}
