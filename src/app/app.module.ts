import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BurgerComponent } from './burger/burger.component';
import { BurgerIngredientComponent } from './burger/burger-ingredient/burger-ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    BurgerComponent,
    BurgerIngredientComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
