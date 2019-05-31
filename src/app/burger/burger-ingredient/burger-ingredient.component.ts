import { Component, Input } from '@angular/core';

@Component({
  selector: 'univ-burger-ingredient',
  templateUrl: './burger-ingredient.component.html',
  styleUrls: ['./burger-ingredient.component.css']
})
export class BurgerIngredientComponent {
  @Input() ingredientType;
}
