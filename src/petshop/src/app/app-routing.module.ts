import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FramelessPageComponent } from './pages/master/frameless-page/frameless-page.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { FramePageComponent } from './pages/master/frame-page/frame-page.component';
import { ProductsPageComponent } from './pages/store/products-page/products-page.component';

const routes: Routes = [
  {
    path: '',
    component: FramePageComponent,
    children: [
      { path: '', component: ProductsPageComponent }
    ]
  },
  {
    path: 'account',
    component: FramelessPageComponent,
    children: [
      { path: '', component: LoginPageComponent },
      { path: 'signup', component: SignupPageComponent },
      { path: 'reset-password', component: ResetPasswordPageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
