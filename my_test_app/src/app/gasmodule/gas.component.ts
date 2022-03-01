import {Component, ChangeDetectionStrategy, ComponentRef} from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import {GasLayoutService, GasHeaderService, GasHeaderModule} from "@cikrf/gas-ui-kit";
import { GasForm } from "@cikrf/gas-ui-kit";
import {Observable} from "rxjs";
import { GasInputComponent} from "@cikrf/gas-ui-kit";

import {
  GasFormControlValueObservable,
  GasFormGroupCheckboxValueObservable,
  GasFormGroupValueObservable
} from "@cikrf/gas-utils/decorators";
import { GasIcon, GasCard, GasIconComponent } from "@cikrf/gas-ui-kit";
import { GasSectionType} from "@cikrf/gas-ui-kit";



// import {DynamicContainerComponent}

@Component({
  selector: 'app-gas',
  templateUrl: './gas.component.html',
  styleUrls: ['./gas.component.scss']
})
export class MyGasComponent {
  title = 'my_test_app';


}
