import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QiscusService } from '../services/qiscus.service';

import { ChatInputFormComponent } from './ChatInputForm.component';

describe('ChatInpuFormComponent', () => {
  let component: ChatInputFormComponent;
  let fixture: ComponentFixture<ChatInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatInputFormComponent],
      providers: [
        {
          provide: QiscusService,
          useValue: {
            sendMessage: jasmine.createSpy('sendMessage'),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call qiscus.sendMessage() when submit', () => {
    const qiscusService = TestBed.inject(QiscusService);
    const { message } = component.messageForm.value;

    component.handleSendMessage(new Event('submit'));

    expect(qiscusService.sendMessage).toHaveBeenCalledWith(
      component.roomId || 0,
      message
    );
  });
});
