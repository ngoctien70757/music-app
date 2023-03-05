import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './modules/signin/signin.component';
import { SigninFormComponent } from './modules/signin/components/signin-form/signin-form.component';
import { SignupFormComponent } from './modules/signin/components/signup-form/signup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SigninFormComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
