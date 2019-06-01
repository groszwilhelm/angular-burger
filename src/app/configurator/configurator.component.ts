import { Component, OnInit } from '@angular/core';
import { BurgerService } from '../burger.service';

@Component({
  selector: 'univ-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.css']
})
export class ConfiguratorComponent {

  constructor(public burgerService: BurgerService) { }

  public updateIngredient(ingredient) {
    this.burgerService.updateIngredients(ingredient);
  }

  public saveBurger() {
    this.burgerService.storeBurger();
  }
}
