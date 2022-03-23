import { BehaviorSubject } from 'rxjs';
import {Component,
  ChangeDetectionStrategy,
  ComponentRef} from '@angular/core';
import { FormGroup,
  FormControl } from "@angular/forms";
import {
  GasLayoutService,
  GasHeaderService,
  GasHeaderModule,
  GasCheckbox,
  GasStatusTagTypeEnum, GasStatusTag,
  GasBaseMenuInterface,
  GasMenuService, GasInputModule, GasSwitchModule, GasButtonModule
} from "@cikrf/gas-ui-kit";
import { GasForm,
  GasIconColor,
  GasButton,
  GasSize } from "@cikrf/gas-ui-kit";
import { Observable } from "rxjs";
import { GasInputComponent } from "@cikrf/gas-ui-kit";

import {DefaultValueAccessor} from "@angular/forms";
import {
  GasFormControlValueObservable,
  GasFormGroupCheckboxValueObservable,
  GasFormGroupValueObservable,
} from '@cikrf/gas-utils/decorators';
// import { map } from 'rxjs/operators';
import { GasIcon, GasCard, GasIconComponent } from "@cikrf/gas-ui-kit";
import { GasSectionType} from "@cikrf/gas-ui-kit";

// import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

// import { GasButton, GasSize } from 'projects/ui-kit/src';
// import {
//   GasFormGroupCheckboxValueObservable,
//   GasFormGroupValueObservable,
// } from '@cikrf/gas-utils/decorators';



// import {DynamicContainerComponent}

@Component({
  selector: 'app-gas',
  templateUrl: './gas.component.html',
  styleUrls: ['./gas.component.scss']
})
export class MyGasComponent {

  mark1: boolean = true;
  mark2: boolean = false;
  sw = false;

  public disabl(): void {
    this.form1.setValue(!this.form1.value);
    this.form2.setValue(!this.form2.value);
    //this.form1.setValue(!this.form1.value);
  }

  form1 = new FormControl();
  form2 = new FormControl();

  constructor() {

    this.form1.setValue(true);
    this.form2.setValue(false);
  }

  title = 'my_test_app';


  ps = 'password';
}
