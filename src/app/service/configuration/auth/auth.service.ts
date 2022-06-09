import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from '../message/message.service';
import { FeathersService } from 'src/app/core/feathersjs/feathers.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public refreshToken: Subject<any> = new Subject<any>();
  constructor(
    private router: Router,
    private translate: TranslateService,
    private message: MessageService,
    private feathers: FeathersService
  ) { }

  public async authenticate(credentials?: any): Promise<any> {
    return await this.feathers.authenticate(credentials);
  }

  public async logOut(): Promise<void> {
    try {
      await this.feathers.logout();
      localStorage.removeItem('CLIENT-ID')!;
      this.translate
        .get(`notification.tab-block-seccion`)
        .subscribe((message: string) => {
          this.message.createMessageInfo(message);
        });
      this.router.navigate(['/autenticacion']);
    } catch (error: any) {
      console.error(error);
      this.router.navigate(['/autenticacion']);
    }
  }

  isToken(): boolean {
    return (
      !!localStorage.getItem('feathers-jwt') && !!localStorage.getItem('ID')
    );
  }

  async isAuth(): Promise<boolean> {
    try {
      const auth = await this.authenticate();
      if (!auth || !this.isToken()) {
        this.logOut();
        return false;
      }
      return true;
    } catch (error) {
      this.logOut();
      return false;
    }
  }

  async isLogin(): Promise<boolean> {
    try {
      const auth = await this.authenticate();
      if (!auth) {
        return true;
      }
      this.router.navigate(['/welcome']);
      return false;
    } catch (error) {
      return true;
    }
  }

  getToken(): any {
    return window.localStorage.getItem('feathers-jwt');
  }

  setToken(token: string): void {
    window.localStorage.setItem('feathers-jwt', token);
  }

  getIdClient(): any {
    return window.localStorage.getItem('ID');
  }

  setIdClient(id: string): void {
    window.localStorage.setItem('ID', id);
  }
}
