import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import QiscusSDK from 'qiscus-sdk-core';

const KEY = 'user';

interface User {
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class QiscusService {
  client: QiscusSDK;
  user: User | null = null;

  constructor(private router: Router) {
    this.client = new QiscusSDK();

    this.client.init({
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
        this.client.setUserWithIdentityToken({ user });
        this.user = user;
      } catch (e) {
        localStorage.removeItem(KEY);
      }
    }
  }

  isAuthenticated() {
    return this.client.isLogin;
  }

  login(userId: string, userName: string, userKey: string) {
    return this.client.setUser(userId, userName, userKey);
  }

  logout() {
    this.client.disconnect();
    localStorage.removeItem(KEY);
    this.router.navigate(['/']);
  }
}
