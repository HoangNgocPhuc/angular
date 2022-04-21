import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';

@NgModule({
  declarations: [
    // component that is created whenever a new project is initiated 
    AppComponent,
    NewCmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // reference to the services created.
  providers: [],
  // reference to the default component created
  bootstrap: [AppComponent]
})
export class AppModule { }
