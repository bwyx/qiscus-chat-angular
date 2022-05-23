import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { QiscusService } from 'src/app/services/qiscus.service';

import { ChatView } from './chat.view';

describe('ChatComponent', () => {
  let component: ChatView;
  let fixture: ComponentFixture<ChatView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatView],
      providers: [
        {
          provide: QiscusService,
          useValue: {
            user: {
              email: 'user-email@qiscus.com',
            },
            client: {
              getRoomById: jasmine
                .createSpy('getRoomById')
                .and.returnValue(Promise.resolve()),
            },
          },
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              queryParamMap: {
                get() {
                  return 'room-id';
                },
              },
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render "no comments yet" if no comments', () => {
    component.comments = [];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.no-coments').textContent).toContain(
      'No comments yet'
    );
  });
});
