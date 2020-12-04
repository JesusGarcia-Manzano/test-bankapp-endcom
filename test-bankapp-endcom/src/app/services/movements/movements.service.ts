import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movements } from 'src/app/interfaces/movements.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MovementsService {

  constructor(private http: HttpClient) { }

  getMovements() {
    return this.http.get<Movements[]>(environment.movements)
  }
}
