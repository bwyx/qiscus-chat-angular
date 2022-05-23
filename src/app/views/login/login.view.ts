import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { QiscusService } from 'src/app/services/qiscus.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login.view.html',
  styleUrls: ['./login.view.sass'],
})
export class LoginView {
  isLoading = false;
  loginForm: FormGroup;

  constructor(private qiscusService: QiscusService, private router: Router) {
    this.loginForm = new FormGroup({
      userId: new FormControl('guest-101'),
      userName: new FormControl('Guest 101'),
      userKey: new FormControl('passkey'),
    });
  }

  handleSubmit(e: SubmitEvent) {
    e.preventDefault();

    this.isLoading = true;
    const { userId, userName, userKey } = this.loginForm.value;

    this.qiscusService
      .login(userId, userKey, userName)
      .then(() => {
        this.router.navigate(['/lobby']);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}
