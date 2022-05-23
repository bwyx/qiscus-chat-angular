import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbyView } from './lobby.view';

describe('LobbyView', () => {
  let component: LobbyView;
  let fixture: ComponentFixture<LobbyView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LobbyView],
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
});
