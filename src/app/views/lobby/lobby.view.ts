import { Component, OnInit } from '@angular/core';
import { QiscusService } from 'src/app/services/qiscus.service';

@Component({
  selector: 'app-lobby-view',
  templateUrl: './lobby.view.html',
  styleUrls: ['./lobby.view.sass'],
})
export class LobbyView implements OnInit {
  rooms: any;

  constructor(private qiscusService: QiscusService) {}

  ngOnInit(): void {
    this.qiscusService.client
      .loadRoomList({ page: 1, limit: 10 })
      .then((rooms: any) => {
        this.rooms = rooms;
      });
  }

  handleLogout(e: Event) {
    e.preventDefault();

    this.qiscusService.logout();
  }
}
