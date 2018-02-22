import { NgModule } from '@angular/core';

import { FooComponent }   from './component/foo/foo.component';
import { routing } from './foo.routing';

@NgModule({
  imports: [routing],
  declarations: [FooComponent]
})
export class FooModule {}