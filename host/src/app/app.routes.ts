import { Routes } from '@angular/router';
import {loadRemoteModule} from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>  loadRemoteModule('mfe1','./Component').then((c) => c.AppComponent),
  }
];
