import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChatInputFormComponent } from 'src/app/ChatInputForm/ChatInputForm.component';
import { TextBubbleComponent } from '../../components/TextBubble/TextBubble.component';

import { ChatView } from './chat.view';

const routes: Routes = [
  {
    path: '',
    component: ChatView,
  },
];

@NgModule({
  declarations: [ChatView, TextBubbleComponent, ChatInputFormComponent],
  imports: [RouterModule.forChild(routes), CommonModule, ReactiveFormsModule],
  exports: [RouterModule, TextBubbleComponent, ChatInputFormComponent],
})
export class ChatModule {}
