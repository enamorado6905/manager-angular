import { Injectable } from '@angular/core';
import { AuthService } from '../configuration/auth/auth.service';
import { NotificationService } from '../configuration/notification/notification.service';
import { FeathersService } from '../../core/feathersjs/feathers.service';

@Injectable({
  providedIn: 'root',
})
export class AuthmanagementService {
  constructor(
    private feathers: FeathersService,
    private notification: NotificationService,
    private auth: AuthService
  ) { }

  async checkUnique(token: any): Promise<boolean> {
    try {
      const options = {
        action: 'checkUnique',
        value: { token }, // {email}, {token: verifyToken}
        notifierOptions: {}, // options passed to options.notifier, e.g. {preferredComm: 'cellphone'}
      };
      await this.feathers.service('authManagement').create(options);
      this.notification.createNotificationSuccess();
      return true;
    } catch (error: any) {
      console.error(error);
      this.notification.createNotificationError(error.message);
      return false;
    }
  }

  async resendVerifySignup(email: string): Promise<boolean> {
    try {
      let _id = this.auth.getIdClient();
      let token = this.auth.getToken();
      if (!token || !_id) {
        return false;
      }
      const options = {
        action: 'resendVerifySignup',
        value: { email }, // {email}, {token: verifyToken}
        notifierOptions: {},
      };
      await this.feathers.service('authManagement').create(options);
      this.notification.createNotificationSuccess();
      return true;
    } catch (error: any) {
      console.error(error);
      this.notification.createNotificationError(error.message);
      return false;
    }
  }

  async verifySignupLong(): Promise<boolean> {
    try {
      let token = this.auth.getToken();
      if (!token) {
        return false;
      }
      const options = {
        action: 'verifySignupLong',
        value: {}, // {email}, {token: verifyToken}
      };
      await this.feathers.service('authManagement').create(options);
      this.notification.createNotificationSuccess();
      return true;
    } catch (error: any) {
      this.notification.createNotificationError(error.message);
      return false;
    }
  }

  async verifySignupShort(): Promise<boolean> {
    try {
      let token = this.auth.getToken();
      if (!token) {
        return false;
      }
      const options = {
        action: 'verifySignupShort',
        value: {
          user: {},
          token,
        },
      };
      await this.feathers.service('authManagement').create(options);
      this.notification.createNotificationSuccess();
      return true;
    } catch (error: any) {
      this.notification.createNotificationError(error.message);
      return false;
    }
  }

  async verifySignupSetPasswordLong(password: string): Promise<boolean> {
    try {
      let token = this.auth.getToken();
      if (!token) {
        return false;
      }
      const options = {
        action: 'verifySignupSetPasswordLong',
        value: {
          token,
          password,
        },
      };
      await this.feathers.service('authManagement').create(options);
      this.notification.createNotificationSuccess();
      return true;
    } catch (error: any) {
      this.notification.createNotificationError(error.message);
      return false;
    }
  }

  async verifySignupSetPasswordShort(password: string): Promise<boolean> {
    try {
      let token = this.auth.getToken();
      if (!token) {
        return false;
      }
      const options = {
        action: 'verifySignupSetPasswordShort',
        value: {
          user: {},
          token,
          password,
        },
      };
      await this.feathers.service('authManagement').create(options);
      this.notification.createNotificationSuccess();
      return true;
    } catch (error: any) {
      this.notification.createNotificationError(error.message);
      return false;
    }
  }

  async sendResetPwd(email: string): Promise<boolean> {
    try {
      let token = this.auth.getToken();
      const options = {
        action: 'sendResetPwd',
        value: { email }, // {email}, {token: verifyToken}
        notifierOptions: {}, // options passed to options.notifier, e.g. {preferredComm: 'email'}
      };
      await this.feathers.service('authManagement').create(options);
      this.notification.createNotificationSuccess();
      return true;
    } catch (error: any) {
      this.notification.createNotificationError(error.message);
      return false;
    }
  }

  async resetPwdLong(token: any, password: string): Promise<boolean> {
    try {
      const options = {
        action: 'resetPwdLong',
        value: {
          token, // compares to .resetToken
          password, // new password
        },
      };
      await this.feathers.service('authManagement').create(options);
      this.notification.createNotificationSuccess();
      return true;
    } catch (error: any) {
      this.notification.createNotificationError(error.message);
      return false;
    }
  }

  async changePassword(
    _id: string,
    email: string,
    oldPassword: string,
    password: string
  ): Promise<boolean> {
    try {
      if (!email || !oldPassword || !password) {
        return false;
      }
      const options = {
        action: 'passwordChange',
        value: {
          user: { email, _id },
          oldPassword,
          password,
        },
      };
      await this.feathers.service('authManagement').create(options);
      this.notification.createNotificationSuccess();
      return true;
    } catch (error: any) {
      this.notification.createNotificationError(error.message);
      return false;
    }
  }

  async identityChange(
    _id: string,
    email: string,
    oldPassword: string,
    password: string
  ): Promise<boolean> {
    try {
      if (!email || !oldPassword || !password) {
        return false;
      }
      const options = {
        action: 'identityChange',
        value: {
          user: {}, // identify user, e.g. {email: 'a@a.com'}. See options.identifyUserProps.
          password, // current password for verification
          changes: {}, // {email: 'a@a.com'}
        },
      };
      await this.feathers.service('authManagement').create(options);
      this.notification.createNotificationSuccess();
      return true;
    } catch (error: any) {
      this.notification.createNotificationError(error.message);
      return false;
    }
  }
}
