import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-search',
  template: `
    <div id="input-item-search" class="input-search" [style.display]="">
      <nz-input-group [nzSuffix]="prefixIconSearch">
        <input type="text" nz-input placeholder="input search text" />
      </nz-input-group>
      <ng-template #prefixIconSearch>
        <i nz-icon nzType="search"></i>
      </ng-template>
    </div>
    <div id="trigger-item-search" class="trigger-item" (click)="open()">
      <i nz-icon nzType="search" nzTheme="outline"></i>
    </div>
    <nz-drawer
      [nzClosable]="true"
      [nzVisible]="visible"
      nzPlacement="top"
      [nzTitle]="TitleTpl"
      (nzOnClose)="close()"
    >
      <ng-template #TitleTpl>
        <div class="drawer-search-movil input-search">
          <nz-input-group [nzSuffix]="prefixIconSearch">
            <input type="text" nz-input placeholder="input search text" />
          </nz-input-group>
          <ng-template #prefixIconSearch>
            <i nz-icon nzType="search"></i>
          </ng-template>
        </div>
      </ng-template>
      <ng-container *nzDrawerContent></ng-container>
    </nz-drawer>
  `,
})
export class AppSearchComponent implements OnInit {
  public noneStyle = "display:'none'";
  public visible: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.change();
  }
  change(): void {
    this.layout();
    window.addEventListener('resize', this.layout);
  }
  layout(): void {
    const inputShearch = document.getElementById(
      'input-item-search'
    ) as HTMLElement;
    const triggerShearch = document.getElementById(
      'trigger-item-search'
    ) as HTMLElement;
    if (window.innerWidth >= 768) {
      inputShearch.style.display.replace('none', '');
      triggerShearch.style.display != 'none';
    } else if (window.innerWidth < 768) {
      triggerShearch.style.display.replace('none', '');
      inputShearch.style.display = 'none';
    }
  }
  open(): void {
    this.visible = true;
  }
  close(): void {
    this.visible = false;
  }
}
