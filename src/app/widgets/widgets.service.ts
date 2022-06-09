import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WidgetsService {
  public listItemThemes: any[] = [
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
  ];
  constructor() {}
}
