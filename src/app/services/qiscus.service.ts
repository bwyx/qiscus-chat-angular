import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import QiscusSDK from 'qiscus-sdk-core';

const KEY = 'user';

@Injectable({
  providedIn: 'root',
})
export class QiscusService {
  private qiscus: QiscusSDK;

  constructor(router: Router) {
    this.qiscus = new QiscusSDK();

    this.qiscus.init({
      AppId: 'sdksample',
      options: {
        loginSuccessCallback({ user }: any) {
          localStorage.setItem(KEY, JSON.stringify(user));

          router.navigate(['/lobby']);
          console.log('login success', user);
        },
        loginErrorCallback(error: any) {
          localStorage.removeItem(KEY);

          alert(error.response.body.error.message);
          console.error('login failed', error);
        },
      },
    });

    const savedUser = localStorage.getItem(KEY);
    if (savedUser) {
      try {
        const user = savedUser ? JSON.parse(savedUser) : null;
        this.qiscus.setUserWithIdentityToken({ user });
      } catch (e) {
        localStorage.removeItem(KEY);
      }
    }
  }

  isAuthenticated() {
    return this.qiscus.isLogin;
  }

  login(userId: string, userName: string, userKey: string) {
    return this.qiscus.setUser(userId, userName, userKey);
  }

  logout() {
    this.qiscus.disconnect();
    localStorage.removeItem(KEY);
  }

  loadRoomList(opts: { page: number; limit: number }): Promise<any> {
    return this.qiscus.loadRoomList(opts);
  }
}
