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
    if (this.mark1 == this.mark2) {
      this.mark1 = true;
      this.mark2 = false;
    }
    else {
      this.sw = this.mark1;
      this.mark1 = this.mark2;
      this.mark2 = this.sw;
    }

  }

  constructor(private button: GasButtonModule,) {
    if (this.mark1 == this.mark2) {
      this.mark1 = true;
      this.mark2 = false;
    }
  }

  title = 'my_test_app';
  // constructor(private myswitch: FormControl,
  //
  //   ) {
  //   // this.mark1 = this.myswitch.value;
  //   if (this.myswitch.value || !this.myswitch.value) {
  //     this.mark1 = this.myswitch.value;
  //     console.log('asdasdasdasdasdasdadss');
  //
  //   }
  // }


  ps = 'password';


}



// import { ChangeDetectionStrategy, Component } from '@angular/core';
//
// import { GasIcon, GasMenuService } from 'projects/ui-kit/src';
//
// @Component({
//   selector: 'app-navigation-menu-example',
//   templateUrl: './gas-navigation-menu-example.component.html',
//   changeDetection: ChangeDetectionStrategy.OnPush,
// })
// export class NavigationMenuExampleComponent {
//   constructor(
//     private gasMenuService: GasMenuService,
//   ) {
//     this.gasMenuService.meta = {
//       title: `Государственная
//       автоматизированная система`,
//       subtitle: 'Выборы 2.0',
//       version: '1.2.3.4.555',
//       routes: [
//         {
//           title: 'Избиратели',
//           icon: GasIcon.Menu.Home,
//           route: '/',
//           callback: () => this.gasMenuService.activeRoute = '/',
//         },
//         {
//           title: 'Голосования',
//           icon: GasIcon.Menu.Manage,
//           route: '/voting',
//           callback: () => this.gasMenuService.activeRoute = '/voting',
//           childs: [
//             {
//               title: 'Все',
//               route: '/voting/all',
//               callback: () => this.gasMenuService.activeRoute = '/voting/all',
//             },
//             {
//               title: 'Конкретный',
//               route: '/voting/current',
//               callback: () => this.gasMenuService.activeRoute = '/voting/current',
//             },
//           ],
//         },
//         {
//           title: 'Правила голосования',
//           icon: GasIcon.Menu.Case,
//           route: '/voting/rule',
//           callback: () => this.gasMenuService.activeRoute = '/voting/rule',
//           childs: [
//             {
//               title: 'Все',
//               route: '/voting/rule/all',
//               callback: () => this.gasMenuService.activeRoute = '/voting/rule/all',
//             },
//             {
//               title: 'Конкретный',
//               route: '/voting/rule/current',
//               callback: () => this.gasMenuService.activeRoute = '/voting/rule/current',
//             },
//           ],
//         },
//         {
//           title: 'Home',
//           icon: GasIcon.Menu.World,
//           route: '/home',
//           callback: () => this.gasMenuService.activeRoute = '/home',
//           childs: [
//             {
//               title: 'Все',
//               route: '/home/all',
//               callback: () => this.gasMenuService.activeRoute = '/home/all',
//             },
//             {
//               title: 'Конкретный',
//               route: '/home/current',
//               callback: () => this.gasMenuService.activeRoute = '/home/current',
//             },
//           ],
//         },
//       ],
//     };
//
//     this.gasMenuService.activeRoute = '/';
//
//     this.gasMenuService.userData = {
//       title: 'Выход',
//       icon: 'actions-logout',
//       isLoading: false,
//       logoutCallback: () => {
//         this.gasMenuService.userLoading = true;
//         console.log('logout');
//       },
//     };
//
//     this.gasMenuService.bottomButtons = [
//       {
//         title: 'Документация',
//         icon: GasIcon.Navigation.Home,
//         callback: () => console.log('Home'),
//       },
//     ];
//   }
// }
