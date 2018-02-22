import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpModule, XHRBackend} from '@angular/http';


import { AppComponent }  from './components/app/app.component'
import { EagerComponent  } from './components/eager/eager.component';
import { routing } from './app.routing';


@NgModule({
    imports: [
      BrowserModule,
      routing
      
    ],
    declarations: [
        AppComponent,
        EagerComponent
     
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}