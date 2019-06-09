import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule } from '@angular/material'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'
import { LogoComponent } from './logo/logo.component'
import { NavbarComponent } from './navbar/navbar.component';
import { CommonPlaygroundComponent } from './common-playground/common-playground.component';
import { CountriesPlaygroundComponent } from './countries-playground/countries-playground.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogoComponent,
    CommonPlaygroundComponent,
    CountriesPlaygroundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
