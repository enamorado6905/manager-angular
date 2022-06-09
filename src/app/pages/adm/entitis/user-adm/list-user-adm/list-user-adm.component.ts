import { Component, OnInit, OnDestroy } from '@angular/core';
import { ComunicationEntitisService } from 'src/app/service/configuration/listEntitis/comunicationEntitis.service';
import { ListEntitisService } from 'src/app/service/configuration/listEntitis/listEntitis.service';
import { Url } from 'src/app/store/url';
@Component({
  selector: 'app-list-user-adm',
  templateUrl: './list-user-adm.component.html',
  styleUrls: ['./list-user-adm.component.less'],
})
export class ListUserAdmComponent implements OnInit {
  constructor(
    public comunication: ComunicationEntitisService,
    public listEntitis: ListEntitisService
  ) {}
  routerShow(): string {
    return Url.urlShowAdm;
  }
  routerEdit(): string {
    return Url.urlEditAdm;
  }
  routerDelete(): string {
    return Url.urlDeleteAdm;
  }
  ngOnInit(): void {}
}
