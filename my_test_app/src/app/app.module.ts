import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  GasCardModule,
  GasCheckboxModule,
  GasIconsModule,
  GasInputModule,
  GasLayoutModule,
  GasRadioModule
} from "@cikrf/gas-ui-kit";
import { MyGasComponent} from "./gasmodule/gas.component";

@NgModule({
  declarations: [
    AppComponent,
    MyGasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GasLayoutModule,
    GasCardModule,
    GasInputModule,
    GasRadioModule,
    GasCheckboxModule,
    GasIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
