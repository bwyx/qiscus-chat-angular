import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./views/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'lobby',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./views/lobby/lobby.module').then((m) => m.LobbyModule),
  },
  {
    path: 'chat',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./views/chat/chat.module').then((m) => m.ChatModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
