import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Balance } from 'src/app/interfaces/balance.model';
import { environment } from './../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  constructor(private http: HttpClient) { }

  getBalance() {
    return this.http.get<Balance[]>(environment.balance)
  }
}
