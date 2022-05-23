import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QiscusService } from 'src/app/services/qiscus.service';

import { LobbyView } from './lobby.view';

describe('LobbyView', () => {
  let component: LobbyView;
  let fixture: ComponentFixture<LobbyView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LobbyView],
      providers: [
        {
          provide: QiscusService,
          useValue: {
            client: {
              loadRoomList: jasmine
                .createSpy('loadRoomList')
                .and.returnValue(Promise.resolve()),
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LobbyView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call handleLogout() when logout button is clicked', () => {
    const spy = spyOn(component, 'handleLogout');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(spy).toHaveBeenCalled();
  });
});
