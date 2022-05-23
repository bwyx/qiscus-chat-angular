import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { QiscusService } from '../services/qiscus.service';

@Component({
  selector: 'chat-input-form',
  templateUrl: './ChatInputForm.component.html',
  styleUrls: ['./ChatInputForm.component.sass'],
})
export class ChatInputFormComponent implements OnInit {
  @Input() roomId?: number;
  messageForm: FormGroup;

  constructor(private qiscusService: QiscusService) {
    this.messageForm = new FormGroup({
      message: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  handleSendMessage(e: Event) {
    e.preventDefault();

    const { message } = this.messageForm.value;

    console.log(e, message);

    this.qiscusService.sendMessage(this.roomId || 0, message);
    this.messageForm.setValue({ message: '' });
  }
}
