import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LobbyView } from './lobby.view';

const routes: Routes = [
  {
    path: '',
    component: LobbyView,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
  declarations: [LobbyView],
})
export class LobbyModule {}
