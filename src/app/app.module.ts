import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//shared components
import { AutoCompleteModule } from './shared/components/auto-complete/auto-complete.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //shared components
    AutoCompleteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
