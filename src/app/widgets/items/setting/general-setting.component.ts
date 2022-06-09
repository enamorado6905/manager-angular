import { Component, OnInit } from '@angular/core';
import { NZConfZorroService } from 'src/app/core/ng-zorro/nz-conf-zorro.service';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/core/theme/theme.service';
import { I18NService } from 'src/app/core/i18n/i18n.service';

@Component({
  selector: 'app-item-general-setting',
  templateUrl: './general-setting.component.html',
})
export class ItemGeneralSettingComponent implements OnInit {
  menus: 'menuNoMovil' | 'menuMovil' = 'menuNoMovil';
  listItem: any = [
    {
      type: 'infoUser',
      name: 'app-sidebar.label.info-user',
      divider: false,
      nzDanger: false,
      submenu: false,
    },
    {
      type: 'translate',
      name: 'language.translate',
      divider: false,
      nzDanger: false,
      submenu: true,
      listItem: [
        {
          type: 'translateEnglish',
          name: 'language.english',
          divider: false,
          nzDanger: false,
          submenu: false,
        },
        {
          type: 'translateSpanish',
          name: 'language.spanish',
          divider: false,
          nzDanger: false,
          submenu: false,
        },
      ],
    },
    {
      type: 'themes',
      name: 'app-nav.icon-name.tab-themes',
      divider: false,
      nzDanger: false,
      submenu: true,
      listItem: [
        {
          type: 'default',
          name: 'themes.default',
          divider: false,
          nzDanger: false,
          submenu: false,
        },
        {
          type: 'dark',
          name: 'themes.dark',
          divider: false,
          nzDanger: false,
          submenu: false,
        },
        {
          type: 'aliyun',
          name: 'themes.aliyun',
          divider: false,
          nzDanger: false,
          submenu: false,
        },
        {
          type: 'compact',
          name: 'themes.compact',
          divider: false,
          nzDanger: false,
          submenu: false,
        },
      ],
    },
    {
      type: 'logOut',
      name: 'app-sidebar.label.closed-session',
      divider: true,
      nzDanger: true,
      submenu: false,
    },
  ];
  constructor(
    public NzConfiguration: NZConfZorroService,
    private router: Router,
    private themeService: ThemeService,
    public i18N: I18NService
  ) {
    this.changeLayout();
  }
  ngOnInit(): void {}
  toggle(type: any): void {
    switch (type) {
      case 'infoUser':
        // this.router.navigate([Url.infoUser]);
        break;
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
      case 'logOut':
        // this.auth.logOut();
        break;
      case 'translateSpanish':
        this.i18N.switchLanguage('es-ES');
        break;
      case 'translateEnglish':
        this.i18N.switchLanguage('en-US');
        break;
    }
  }
  changeLayout(): void {
    window.innerWidth > 767
      ? (this.menus = 'menuNoMovil')
      : (this.menus = 'menuMovil');
  }
}
