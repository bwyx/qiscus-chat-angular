import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'text-bubble',
  templateUrl: './TextBubble.component.html',
  styleUrls: ['./TextBubble.component.sass'],
})
export class TextBubbleComponent implements OnInit {
  @Input() text?: string;
  @Input() received?: boolean;
  @Input() time?: number;
  @Input() status:
    | 'sending'
    | 'pending'
    | 'sent'
    | 'delivered'
    | 'read'
    | 'failed' = 'pending';
  @Input() type: 'reply' | 'text' | 'file_attachment' | 'custom' = 'text';
  @Input() payload?: any;

  constructor() {}

  ngOnInit(): void {}
}
