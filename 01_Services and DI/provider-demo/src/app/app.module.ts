import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponent } from './ChildComponent';
import { ParentComponent } from './ParentComponent';
import { SimpleService } from './SimpleService';

@NgModule({
  declarations: [
    AppComponent, ParentComponent, ChildComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SimpleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
