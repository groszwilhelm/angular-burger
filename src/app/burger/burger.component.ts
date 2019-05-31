import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'univ-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent {
  @HostBinding('class.burger') burgerClass = true;
}
