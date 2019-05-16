import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatRadioModule, MatSlideToggleModule, MatDatepickerModule, MatNativeDateModule, MatIconModule, MatButtonModule, MatSelectModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckInputRadioSlideComponent } from './components/check-input-radio-slide/check-input-radio-slide.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { FormFieldComponent } from './components/form-field/form-field.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteComponent,
    CheckInputRadioSlideComponent,
    DatePickerComponent,
    FormFieldComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSelectModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
