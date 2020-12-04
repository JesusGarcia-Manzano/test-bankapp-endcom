import { Component, OnInit } from '@angular/core';
import { Movements } from 'src/app/interfaces/movements.model';
import { MovementsService } from 'src/app/services/movements/movements.service';

@Component({
  selector: 'app-bankapp-movements',
  templateUrl: './bankapp-movements.component.html',
  styleUrls: ['./bankapp-movements.component.scss']
})
export class BankappMovementsComponent implements OnInit {

  constructor(private movementsService: MovementsService) { }
 
  movements: Movements[] = [];

  ngOnInit(): void {
    this.getMovements();
  }

  getMovements() {
    this.movementsService.getMovements()
    .subscribe((movement) => {
    this.movements = movement.movimientos;
    })
  }

}
