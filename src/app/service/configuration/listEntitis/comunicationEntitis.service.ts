import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ListEntitisService } from 'src/app/service/configuration/listEntitis/listEntitis.service';
import { NZConfZorroService } from 'src/app/core/ng-zorro/nz-conf-zorro.service';
import { Url } from 'src/app/store/url';
@Injectable({
  providedIn: 'root',
})
export class ComunicationEntitisService {
  public IDManageList: string | null = null;
  public IDSManageList: Array<string> = [];
  public openOperation = false;
  public subjectOperation = new Subject<void>();
  constructor(
    private router: Router,
    public listEntitis: ListEntitisService,
    public nzZorro: NZConfZorroService
  ) { }

  openWelcomeAdm(): void {
    this.router.navigateByUrl(Url.welcomeAdm);
  }

  openListDate(url: string): void {
    this.router.navigateByUrl(Url.urlAdm + url);
  }

  openShowDate(url: string, id: string): void {
    this.IDManageList = id;
    this.openOperation = true;
    this.router.navigate([
      Url.managerEntitis,
      { outlets: { drawer: `${url}/${id}` } },
    ]);
  }

  openEditDate(url: string, id: string): void {
    this.IDManageList = id;
    this.openOperation = true;
    this.router.navigate([
      Url.managerEntitis,
      { outlets: { drawer: `${url}/${id}` } },
    ]);
  }

  openDeleteDate(url: string, id: string): void {
    this.IDSManageList.push(id);
    this.openOperation = true;
    this.router.navigate([
      Url.managerEntitis,
      { outlets: { modal: `${url}` } },
    ]);
  }

  openDeletesDate(url: string): void {
    this.IDSManageList = this.listEntitis.listIdSelect;
    this.openOperation = true;
    this.router.navigate([
      Url.managerEntitis,
      { outlets: { modal: `${url}` } },
    ]);
  }

  subcribeLayoutChanges(): Subscription {
    return this.nzZorro.layoutChanges.subscribe(() => {
      this.nzZorro.updateLayoutForOrientationChange();
    });
  }

  async deleteAllId(): Promise<void> {
    await Promise.all([
      (this.IDManageList = null),
      this.IDSManageList.forEach(() => this.IDSManageList.pop()),
      this.listEntitis.clearSetIdDelete(),
    ]);
  }
}
