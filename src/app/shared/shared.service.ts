import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public isCollapsed: boolean = false;
  public eventCollapsedSuject = new Subject<boolean>();
  public reciveEventCollapsedObservable =
    this.eventCollapsedSuject.asObservable();

  constructor(private translate: TranslateService) {}
  subscribeClosed() {}
  subscribOpen() {}
  clickCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
    return this.isCollapsed ? this.subscribeClosed() : this.subscribOpen();
  }
}
