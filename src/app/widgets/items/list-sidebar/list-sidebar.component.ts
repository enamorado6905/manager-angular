import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { AuthorizationService } from 'src/app/core/authorization/authorization.service';
import { Url } from 'src/app/store/url';

@Component({
  selector: 'app-item-list-link',
  templateUrl: './list-sidebar.component.html',
})
export class ItemListSidebarComponent implements OnInit {
  public menus = [this.manager()];

  constructor(
    public sharedService: SharedService,
    public auth: AuthorizationService
  ) { }

  ngOnInit(): void { }
  openHandler(level: number, title: string): void { }

  private manager(): object {
    return {
      level: 1,
      title: 'app-sidebar.label.menu-link-sub-Manage',
      icon: 'appstore',
      open: false,
      selected: false,
      disable: false,
      roles: [],
      children: [
        {
          level: 2,
          paddingleft: 2,
          path: '',
          title: 'app-sidebar.label.menu-link-sub-Manage-sub-adm',
          icon: 'bars',
          open: false,
          selected: false,
          disable: false,
          roles: [],
          children: [
            {
              level: 3,
              paddingleft: 3,
              path: Url.urlAddAdm,
              title: 'app-sidebar.label.menu-link-sub-Manage-sub-1',
              selected: false,
              disable: false,
              roles: [],
            },
            {
              level: 3,
              paddingleft: 3,
              path: Url.urlListAdm,
              title: 'app-sidebar.label.menu-link-sub-Manage-sub-2',
              selected: false,
              disable: false,
              roles: [],
            },
          ],
        },
      ],
    };
  }
}
