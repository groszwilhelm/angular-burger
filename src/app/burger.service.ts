import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BurgerService {
  private state = {
    ingredients: [],
    burgerList: []
  };
  public ingredients$ = new EventEmitter();
  public burgers$ = new EventEmitter();

  public updateIngredients(ingredient): void {
    this.state.ingredients.push(ingredient);
    this.ingredients$.next(this.state.ingredients);
  }

  public storeBurger(): void {
    this.state.burgerList.push({ ingredients: [ ...this.state.ingredients ] });
    this.state.ingredients = [];
    this.ingredients$.next(this.state.ingredients);
    this.burgers$.next(this.state.burgerList);
  }
}
