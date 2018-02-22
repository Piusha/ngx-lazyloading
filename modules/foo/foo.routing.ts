import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FooComponent } from './component/foo/foo.component';

const routes: Routes = [
  { path: '', component: FooComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);