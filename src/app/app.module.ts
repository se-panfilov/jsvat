import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule, MatCheckboxModule, MatDividerModule, MatExpansionModule, MatInputModule } from '@angular/material'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'
import { CommonPlaygroundComponent } from './common-playground/common-playground.component'
import { CountriesPlaygroundComponent } from './countries-playground/countries-playground.component'
import { GettingStartedComponent } from './getting-started/getting-started.component'
import { LogoComponent } from './logo/logo.component'
import { MiscComponent } from './misc/misc.component'
import { NavbarComponent } from './navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogoComponent,
    CommonPlaygroundComponent,
    CountriesPlaygroundComponent,
    GettingStartedComponent,
    MiscComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
