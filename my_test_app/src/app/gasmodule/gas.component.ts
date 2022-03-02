import { BehaviorSubject } from 'rxjs';
import {Component, ChangeDetectionStrategy, ComponentRef} from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import {GasLayoutService, GasHeaderService, GasHeaderModule, GasCheckbox} from "@cikrf/gas-ui-kit";
import { GasForm, GasIconColor } from "@cikrf/gas-ui-kit";
import {Observable} from "rxjs";
import { GasInputComponent} from "@cikrf/gas-ui-kit";


import {
  GasFormControlValueObservable,
  GasFormGroupCheckboxValueObservable,
  GasFormGroupValueObservable,
} from '@cikrf/gas-utils/decorators';
import { map } from 'rxjs/operators';
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

  public form = new FormControl(false);

  public checkboxGroup: GasCheckbox.Checkbox[] = [
    {
      key: 'gamma',
      label: 'Функция “Гамма”',
      checked: false,
      description: 'Это важнейшая функция активирует другую важнейшую функцию',
    },
    {
      key: 'tetra',
      label: 'Функция “Тетра”',
      checked: false,
      description: 'Важнейшая функция еще важнее той другой функции и активирует другую важнейшую функцию',
    },
  ];

  public toggleForm(): void {
    this.form.markAsDirty();
    this.form.setValue(!this.form.value);
  }

  public disableForm(): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.form.disabled ? this.form.enable() : this.form.disable();
  }

  public disableFirstTag$ = new BehaviorSubject<boolean>(false);

  public disableItem(): void {
    this.disableFirstTag$.next(!this.disableFirstTag$.value);
  }

  public states: GasForm.InputState = GasForm.InputState.Default;
}
