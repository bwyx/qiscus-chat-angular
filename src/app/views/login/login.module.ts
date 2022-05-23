import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { LoginView } from './login.view';

const routes: Routes = [
  {
    path: '',
    component: LoginView,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule],
  declarations: [LoginView],
})
export class LoginModule {}
