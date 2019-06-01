import { Component } from '@angular/core';
import { BurgerService } from './burger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public ingredients = [];
  public historicBurgers = [];

  constructor(public burgerService: BurgerService) {
    this.burgerService.ingredients$
      .subscribe(ingredients => this.ingredients = ingredients);

    this.burgerService.burgers$
      .subscribe(burgers => this.historicBurgers = burgers);
  }
}
