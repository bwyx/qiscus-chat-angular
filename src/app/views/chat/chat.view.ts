import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QiscusService } from 'src/app/services/qiscus.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.view.html',
  styleUrls: ['./chat.view.sass'],
})
export class ChatView implements OnInit {
  comments: any[] = [];
  userEmail?: string;

  constructor(
    private qiscusService: QiscusService,
    private route: ActivatedRoute
  ) {
    this.userEmail = this.qiscusService.user?.email;
  }

  ngOnInit(): void {
    const roomId = this.route.snapshot.queryParamMap.get('room');
    if (!roomId) {
      console.error("queryParam for 'room' is required");
      window.history.back();
      return;
    }

    this.qiscusService.client.getRoomById(roomId).then((rooms) => {
      console.log(rooms);
      console.log(this.qiscusService.user);

      this.comments = rooms.comments;
    });
  }
}
