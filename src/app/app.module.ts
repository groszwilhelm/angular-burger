import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BurgerComponent } from './burger/burger.component';
import { BurgerIngredientComponent } from './burger/burger-ingredient/burger-ingredient.component';
import { ConfiguratorComponent } from './configurator/configurator.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    BurgerComponent,
    BurgerIngredientComponent,
    ConfiguratorComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
