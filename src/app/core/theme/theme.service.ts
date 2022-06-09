import { Injectable } from '@angular/core';
//import { MessageService } from 'src/app/user/service/configuration/message/message.service';

enum ThemeType {
  dark = 'dark',
  default = 'default',
  aliyun = 'aliyun',
  compact = 'compact',
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  currentTheme = ThemeType.dark;

  constructor() {}

  private reverseTheme(theme: string): ThemeType {
    return theme === ThemeType.dark ? ThemeType.default : ThemeType.dark;
  }

  private removeUnusedTheme(theme: ThemeType): void {
    document.documentElement.classList.remove(theme);
    const removedThemeStyle = document.getElementById(theme);
    if (removedThemeStyle) {
      document.head.removeChild(removedThemeStyle);
    }
  }

  private loadCss(href: string, id: string): Promise<Event> {
    return new Promise((resolve, reject) => {
      const style = document.createElement('link');
      style.rel = 'stylesheet';
      style.href = href;
      style.id = id;
      style.onload = resolve;
      style.onerror = reject;
      document.head.append(style);
    });
  }

  public loadTheme(firstLoad = true): Promise<Event> {
    const theme = this.currentTheme;
    if (firstLoad) {
      document.documentElement.classList.add(theme);
    }
    return new Promise<Event>((resolve, reject) => {
      this.loadCss(`${theme}.css`, theme).then(
        (e) => {
          if (!firstLoad) {
            document.documentElement.classList.add(theme);
          }
          this.removeUnusedTheme(this.reverseTheme(theme));
          resolve(e);
        },
        (e) => reject(e)
      );
    });
  }
  public toggleThemeDark(): Promise<Event> {
    this.currentTheme = ThemeType.dark;
    //this.currentTheme = this.reverseTheme(this.currentTheme);
    return this.loadTheme(false);
  }
  public toggleThemeDefault(): Promise<Event> {
    this.currentTheme = ThemeType.default;
    //this.currentTheme = this.reverseTheme(this.currentTheme);
    return this.loadTheme(false);
  }
  public toggleThemeAliyun(): Promise<Event> {
    this.currentTheme = ThemeType.aliyun;
    //this.currentTheme = this.reverseTheme(this.currentTheme);
    return this.loadTheme(false);
  }
  public toggleThemeCompact(): Promise<Event> {
    this.currentTheme = ThemeType.compact;
    //this.currentTheme = this.reverseTheme(this.currentTheme);
    return this.loadTheme(false);
  }

  public toggleTheme(): Promise<Event> {
    this.currentTheme = this.reverseTheme(this.currentTheme);
    return this.loadTheme(false);
  }
}
