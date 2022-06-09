import { Component, OnInit } from '@angular/core';
import { NZConfZorroService } from 'src/app/core/ng-zorro/nz-conf-zorro.service';
import { ThemeService } from 'src/app/core/theme/theme.service';
import { WidgetsService } from 'src/app/widgets/widgets.service';

@Component({
  selector: 'app-item-themes',
  template: `
    <div
      class="trigger-item"
      nz-dropdown
      [nzDropdownMenu]="menu"
      [nzPlacement]="'bottomLeft'"
      [nzTrigger]="NZConf.clickHover"
    >
      <i nz-icon nzType="skin" nzTheme="outline"></i>
    </div>
    <nz-dropdown-menu #menu="nzDropdownMenu">
      <ul nz-menu>
        <div *ngFor="let item of widgets.listItemThemes">
          <li
            nz-menu-item
            *ngIf="!item.nzDanger && !item.submenu"
            (click)="toggle(item.type)"
          >
            <a> {{ item.name | translate }} </a>
          </li>
        </div>
      </ul>
    </nz-dropdown-menu>
  `,
})
export class ItemThemesComponent implements OnInit {
  constructor(
    private themeService: ThemeService,
    public NZConf: NZConfZorroService,
    public widgets: WidgetsService
  ) {}

  ngOnInit(): void {}
  toggle(type: any) {
    switch (type) {
      case 'dark':
        this.themeService.toggleThemeDark().then();
        break;
      case 'default':
        this.themeService.toggleThemeDefault().then();
        break;
      case 'aliyun':
        this.themeService.toggleThemeAliyun().then();
        break;
      case 'compact':
        this.themeService.toggleThemeCompact().then();
        break;
      default:
        this.themeService.toggleThemeDefault().then();
        break;
    }
  }
}
