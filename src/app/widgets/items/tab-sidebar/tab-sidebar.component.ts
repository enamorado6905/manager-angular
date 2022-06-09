import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-item-tab-sidebar',
  template: `
    <div class="trigger-item" (click)="toggle()">
      <i
        nz-icon
        [nzType]="sharedService.isCollapsed ? 'fullscreen' : 'fullscreen-exit'"
        nzTheme="outline"
      ></i>
    </div>
    <nz-drawer
      [nzBodyStyle]="contentStyle"
      [nzClosable]="false"
      [nzVisible]="visible"
      nzPlacement="right"
      [nzTitle]="TitleTpl"
      (nzOnClose)="close()"
    >
      <ng-template #TitleTpl>
        <div class="drawer-sidebar-movil">
          <app-item-general-setting></app-item-general-setting>
        </div>
      </ng-template>
      <ng-container *nzDrawerContent>
        <app-item-list-link></app-item-list-link>
      </ng-container>
    </nz-drawer>
  `,
})
export class ItemTabSidebarComponent implements OnInit {
  public contentStyle: object = {
    padding: 0,
  };
  public visible: boolean = false;

  constructor(public sharedService: SharedService) {}

  ngOnInit(): void {}
  toggle() {
    window.innerWidth > 767 ? this.collapsed() : this.open();
  }
  collapsed() {
    this.sharedService.clickCollapsed();
  }
  open(): void {
    this.visible = true;
    this.sharedService.isCollapsed = false; // menu open
  }
  close(): void {
    this.visible = false;
  }
}
