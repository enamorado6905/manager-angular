import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import ngEn from '@angular/common/locales/en';
import ngEs from '@angular/common/locales/es';
import { Injectable } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { enUS as dfEn, es as dfES } from 'date-fns/locale';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import {
  en_US,
  en_US as zorroEnUS,
  es_ES,
  es_ES as zorroEnES,
  NzI18nService,
} from 'ng-zorro-antd/i18n';

interface LangData {
  abbr: string;
  text: string;
  code: string;
  ng: NzSafeAny;
  zorro: NzSafeAny;
  date: NzSafeAny;
}

@Injectable({ providedIn: 'root' })
export class I18NService {
  public langs: LangData[] = [
    {
      text: 'English',
      code: 'en-US',
      ng: ngEn,
      zorro: zorroEnUS,
      date: dfEn,
      abbr: '🇬🇧',
    },
    {
      text: 'Español',
      code: 'es-ES',
      ng: ngEs,
      zorro: zorroEnES,
      date: dfES,
      abbr: '🇪🇸',
    },
  ];
  public languageDefault = 'en-US';

  constructor(
    private i18n: NzI18nService,
    private translate: TranslateService
  ) {}
  selectLenguage(): void {
    this.translate.setDefaultLang(this.languageDefault);
    this.translate.use(this.languageDefault);
  }
  i18nHttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, `./assets/tmp/i18n/`, '.json');
  }
  switchLanguage(code: any): void {
    switch (code) {
      case 'en-US':
        this.i18n.setLocale(en_US);
        break;
      case 'es-ES':
        this.i18n.setLocale(es_ES);
        break;
      default:
        this.i18n.setLocale(en_US);
        break;
    }
  }
}
