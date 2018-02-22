import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EagerComponent } from './components/eager/eager.component';

const routes: Routes = [
  { path: '', component: EagerComponent, pathMatch: 'full' },
  { path: 'eager', component: EagerComponent },
  { path: 'lazy', loadChildren: '../lazy/lazy.module#LazyModule' },
  { path: 'foo', loadChildren: '../foo/foo.module#FooModule' }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);