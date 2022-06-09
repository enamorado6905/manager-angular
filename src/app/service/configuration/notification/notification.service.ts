import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(
    private notification: NzNotificationService,
    private translate: TranslateService
  ) { }

  subscribe(sub: Subscription): void {
    sub.unsubscribe();
  }
  createNotificationSuccess(): void {
    let sub1 = this.translate
      .get(`notification.success`)
      .subscribe((title: string) => {
        let sub2 = this.translate.get(`notification.success`).subscribe(
          (message: string) => {
            this.notification.create('success', title, message);
          },
          () => {
            this.subscribe(sub2);
            this.subscribe(sub1);
          }
        );
      });
  }
  createNotificationError(message: string): void {
    let sub1 = this.translate.get(`notification.error`).subscribe(
      (title: string) => {
        this.notification.create('error', title, message);
      },
      () => {
        this.subscribe(sub1);
      }
    );
  }
  createNotificationWarning(message: string): void {
    let sub1 = this.translate.get(`notification.warning`).subscribe(
      (title: string) => {
        this.notification.create('warning', title, message);
      },
      () => {
        this.subscribe(sub1);
      }
    );
  }
  createNotificationInfo(message: string): void {
    let sub1 = this.translate.get(`notification.info`).subscribe(
      (title: string) => {
        this.notification.create('info', title, message);
      },
      () => {
        this.subscribe(sub1);
      }
    );
  }
}
