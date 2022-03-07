import { BehaviorSubject } from 'rxjs';
import {Component,
  ChangeDetectionStrategy,
  ComponentRef} from '@angular/core';
import { FormGroup,
  FormControl } from "@angular/forms";
import {
  GasDynamicBaseComponent,
  GasDynamicBaseModule,
  GasLayoutService,
  GasHeaderService,
  GasHeaderModule,
  GasCheckbox,
  GasStatusTagTypeEnum, GasStatusTag,
  GasBaseMenuInterface,
  GasMenuService,
  GasPanelComponent,
  GasPanelModule, GasBreadcrumb,
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
import { GasIcon, GasCard, GasIconComponent } from "@cikrf/gas-ui-kit";
import { GasSectionType} from "@cikrf/gas-ui-kit";

// import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

// import { GasButton, GasSize } from 'projects/ui-kit/src';
// import {
//   GasFormGroupCheckboxValueObservable,
//   GasFormGroupValueObservable,
// } from '@cikrf/gas-utils/decorators';
// import { DynamicContainerComponent } from



// import {DynamicContainerComponent}

@Component({
  selector: 'app-gas-mymenu',
  templateUrl: './menu-like-gas.component.html',
  styleUrls: ['./menu-like-gas.component.scss']
})
export class MyGasMenuComponent {
  title = 'my_test_app';



  //private gasHeaderService: GasHeaderService.prototype;
  // private gasHeaderService: any;
  //
  //
  // public toggleBreadcrumbs(): void {
  //   const breadcrumbs: GasBreadcrumb[] = this.gasHeaderService.breadcrumbs.length === 0
  //   ? [
  //       {
  //         title: 'Main',
  //         callback: () => this.
  //       }
  //     ]
  // }
 swap = '';


  constructor(private header: GasHeaderService,


    private gasMenuService: GasMenuService,
  ) {
    this.header.setTitle('Главная');
    this.header.setIcon('cool-home-alt-outline');
    this.header.iconColor = '#4192D9';
    this.header.breadcrumbs = [
      {
        title: 'Администрирование',
        callback: () => {},
      },
      {
        title: 'Главная',
        callback: () => {},
      }
    ];
    //swap = 0;
    //this.size.toFixed(1);


    this.gasMenuService.meta = {
      title: '',
      subtitle: 'Меню',


      routes: [
        {
          title: 'Домой',
          icon: GasIcon.Navigation.Home,
          route: '/home',
          callback: () => this.gasMenuService.activeRoute = '/home',
        },
        {
          title: 'Экспорт',
          icon: GasIcon.Arrows.Open,
          route: '/voting',
          callback: () => this.gasMenuService.activeRoute = '/voting',

        },
        {
          title: 'Просмотр данных',
          icon: GasIcon.CoolCalendar.Calendar,
          route: '/rule',
          callback: () => this.gasMenuService.activeRoute = '/rule',

        },
        {
          title: 'Репликация',
          icon: GasIcon.CoolEdit.Copy,
          route: '/repl',
          callback: () => this.gasMenuService.activeRoute = '/repl',

        },
        {
          title: 'Просмотр логов',
          icon: GasIcon.CoolEdit.ListMinus,
          route: '/logs',
          callback: () => this.gasMenuService.activeRoute = '/logs',
        },

      ],
    };

    // this.gasMenuService.activeRoute = '/';


    this.gasMenuService.bottomButtons = [
      {
        title: 'Вход / Выход',
        icon: GasIcon.CoolUser.User,
        callback: () => console.log('Login'),
      },
    ];
  }

}
