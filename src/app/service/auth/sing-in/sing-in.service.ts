import { Injectable } from '@angular/core';
import { NotificationService } from 'src/app/service/configuration/notification/notification.service';
import { AuthService } from '../../configuration/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class SingInService {
  constructor(
    private auth: AuthService,
    private notification: NotificationService,
  ) { }

  async signInADM(email: string, password: string): Promise<any> {
    try {
      if (!email || !password) {
        return false;
      }
      const _auth = {
        strategy: 'local',
        email,
        password,
      };
      const user = await this.auth.authenticate(_auth);
      this.notification.createNotificationSuccess();
      window.localStorage.setItem('ID', user.usersadm._id);
      return true;
    } catch (error: any) {
      this.notification.createNotificationError(error.message);
      return false;
    }
  }
}
