import { Component, Input } from '@angular/core';

@Component({
  selector: 'univ-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent {
  @Input()
  public ingredients: Array<string> = [];
}
