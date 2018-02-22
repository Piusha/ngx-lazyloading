import { NgModule } from '@angular/core';

import { LazyComponent }   from './component/lazy/lazy.component';
import { routing } from './lazy.routing';

@NgModule({
  imports: [routing],
  declarations: [LazyComponent]
})
export class LazyModule {}