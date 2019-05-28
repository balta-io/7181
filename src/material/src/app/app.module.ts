import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatRadioModule, MatSlideToggleModule, MatDatepickerModule, MatNativeDateModule, MatIconModule, MatButtonModule, MatSelectModule, MatSliderModule, MatMenuModule, MatSidenavModule, MatToolbar, MatToolbarModule, MatListModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckInputRadioSlideComponent } from './components/check-input-radio-slide/check-input-radio-slide.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { SelectComponent } from './components/select/select.component';
import { SliderComponent } from './components/slider/slider.component';
import { MenuComponent } from './components/menu/menu.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteComponent,
    CheckInputRadioSlideComponent,
    DatePickerComponent,
    FormFieldComponent,
    SelectComponent,
    SliderComponent,
    MenuComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
    MatSliderModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
