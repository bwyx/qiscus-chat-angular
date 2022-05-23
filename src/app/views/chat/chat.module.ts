import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextBubbleComponent } from '../../components/TextBubble/TextBubble.component';

import { ChatView } from './chat.view';

const routes: Routes = [
  {
    path: '',
    component: ChatView,
  },
];

@NgModule({
  declarations: [ChatView, TextBubbleComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule, TextBubbleComponent],
})
export class ChatModule {}
