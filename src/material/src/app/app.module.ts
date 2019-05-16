import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatRadioModule, MatSlideToggleModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckInputRadioSlideComponent } from './components/check-input-radio-slide/check-input-radio-slide.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteComponent,
    CheckInputRadioSlideComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
