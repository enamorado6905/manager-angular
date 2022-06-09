import { Component, Input, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UsersadmService } from 'src/app/service/entitis/usersadm/usersadm.service';
import { TranslateService } from '@ngx-translate/core';
import { NZConfZorroService } from 'src/app/core/ng-zorro/nz-conf-zorro.service';
import { ComunicationEntitisService } from 'src/app/service/configuration/listEntitis/comunicationEntitis.service';
import { Url } from 'src/app/store/url';
import * as typeSystem from 'src/app/store/type-system';

@Component({
  selector: 'app-component-delete-entitis',
  template: ``,
})
export class ItemDeleteEntitisComponent implements OnInit {
  private title: any;
  private buttonCancel: any;
  private buttonOk: any;

  @Input() entiti!: typeSystem.typeEntitis;

  constructor(
    private modal: NzModalService,
    private translate: TranslateService,
    public comunication: ComunicationEntitisService,
    public nzZorro: NZConfZorroService,
    private userAdmService: UsersadmService,
  ) { }

  async ngOnInit(): Promise<void> {
    if (this.comunication.IDSManageList.length === 0) {
      this.comunication.openWelcomeAdm();
      return await this.destroy();
    }
    this.getDateTraslate();
    this.showDeleteConfirm();
  }
  private getDateTraslate(): void {
    this.translate
      .get(`notification.delete-confirm`)
      .subscribe((message: string) => {
        this.title = message;
      });
    this.translate.get(`button.ok`).subscribe((message: string) => {
      this.buttonOk = message;
    });
    this.translate.get(`button.cancel`).subscribe((message: string) => {
      this.buttonCancel = message;
    });
  }
  private showDeleteConfirm(): void {
    this.modal.confirm({
      nzTitle: this.title,
      nzOkText: this.buttonOk,
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: async () => await this.deleteEntitis(),
      nzCancelText: this.buttonCancel,
      nzOnCancel: () => {
        this.destroy();
      },
    });
  }
  private async destroy(): Promise<void> {
    await Promise.all([
      this.comunication.deleteAllId(),
      (this.comunication.openOperation = false),
    ]);
  }
  private async deleteEntitis(): Promise<void> {
    switch (this.entiti) {
      case 'UserAdm':
        await this.userAdmService.deletesUserAdm$(
          this.comunication.IDSManageList
        );
        this.comunication.openListDate(Url.urlListAdm);
        break;
      default:
        this.comunication.openWelcomeAdm();
        this.destroy();
        break;
    }
    this.destroy();
  }
}
