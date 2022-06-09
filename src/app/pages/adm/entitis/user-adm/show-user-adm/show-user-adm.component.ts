import { Component, OnInit } from '@angular/core';
import { UsersadmService } from 'src/app/service/entitis/usersadm/usersadm.service';
import { NZConfZorroService } from 'src/app/core/ng-zorro/nz-conf-zorro.service';
import { Observable, Subscription } from 'rxjs';
import { ComunicationEntitisService } from 'src/app/service/configuration/listEntitis/comunicationEntitis.service';
import { Url } from 'src/app/store/url';
import { ActivatedRoute } from '@angular/router';
import { UserAdm } from 'src/app/core/model/user-adm.model';

@Component({
  selector: 'app-show-user-adm',
  templateUrl: './show-user-adm.component.html',
  styleUrls: ['./show-user-adm.component.less'],
})
export class ShowUserAdmComponent implements OnInit {
  private subscription: Array<Subscription> = [];
  public initLoading = false;
  public observerServices!: Observable<UserAdm>;
  public user!: UserAdm;
  constructor(
    private userAdmService: UsersadmService,
    public comunication: ComunicationEntitisService,
    public nzZorro: NZConfZorroService,
    private activatedRoute: ActivatedRoute
  ) {
    this.subscription.push(
      this.comunication.subcribeLayoutChanges(),
      this.subcribeActiveRouter(),
      this.subscribe()
    );
  }

  ngOnInit(): void { }
  private observer(id: string): Observable<UserAdm> {
    return this.userAdmService.getUseradm$(id);
  }
  private subcribeActiveRouter(): Subscription {
    return this.activatedRoute.params.subscribe({
      next: (params: any): void => {
        const id: any = params['id'] || null;
        if (!id) return this.destroy();
        this.observerServices = this.observer(id);
        this.comunication.openOperation = true;
      },
      error: (e: any) => {
        console.error(e);
        this.initLoading = false;
        this.destroy();
        return;
      },
      complete: () => {
        console.log('complete');
        this.initLoading = false;
      },
    });
  }
  private subscribe(): Subscription {
    this.initLoading = true;
    return this.observerServices.subscribe({
      next: (data: UserAdm) => {
        this.user = data;
        this.initLoading = false;
      },
      error: (e) => {
        console.error(e);
        this.destroy();
        this.initLoading = false;
      },
      complete: () => {
        this.initLoading = false;
      },
    });
  }
  destroy(): void {
    this.subscription.forEach((m) => m.unsubscribe());
    this.comunication.deleteAllId();
    this.comunication.openOperation = false;
    this.comunication.openListDate(Url.urlListAdm);
  }
}
