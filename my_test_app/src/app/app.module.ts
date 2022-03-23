import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  GasBaseModule, GasButtonModule,
  GasCardModule,
  GasCheckboxModule, GasHeaderModule,
  GasIconsModule,
  GasInputModule,
  GasLayoutModule,
  GasMenuService, GasPanelModule,
  GasRadioModule, GasSpinnerModule, GasSwitchModule, GasTabsModule
} from "@cikrf/gas-ui-kit";
import { MyGasComponent} from "./gasmodule/gas.component";
import {MyGasMenuComponent} from "./menulikemodule/menu-like-gas.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MyGasComponent,
    MyGasMenuComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        GasBaseModule,
        GasButtonModule,
        GasCardModule,
        GasCheckboxModule,
        GasLayoutModule,
        GasCardModule,
        GasIconsModule,
        GasInputModule,
        GasRadioModule,
        GasSwitchModule,
        GasSpinnerModule,
        GasHeaderModule,
        GasPanelModule,
        GasTabsModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
