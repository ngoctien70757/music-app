import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninFormComponent } from './modules/signin/components/signin-form/signin-form.component';
import { SignupFormComponent } from './modules/signin/components/signup-form/signup-form.component';
import { SigninComponent } from './modules/signin/signin.component';

const routes: Routes = [
  //home layout
  { path: '', redirectTo: 'SignIn', pathMatch: 'full' },
  {
    path: '',
    component: SigninComponent,
    children: [
      { path: 'signin', component: SigninFormComponent },
      { path: 'signup', component: SignupFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
