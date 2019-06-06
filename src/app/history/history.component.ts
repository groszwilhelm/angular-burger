import { Component } from '@angular/core';
import { BurgerService } from '../burger.service';

@Component({
  selector: 'univ-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  public historicBurgers = [];

  constructor(public burgerService: BurgerService) {
    this.burgerService.burgers$
      .subscribe(burgers => this.historicBurgers = burgers);
  }
}
