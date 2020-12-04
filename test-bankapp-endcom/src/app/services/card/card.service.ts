import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment.prod';
import { Card } from 'src/app/interfaces/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  getCard() {
    return this.http.get<Card[]>(environment.card)
  }

}
