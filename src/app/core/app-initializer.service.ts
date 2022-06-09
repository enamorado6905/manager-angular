import { APP_INITIALIZER } from '@angular/core';
import { ThemeService } from './theme/theme.service';
import { I18NService } from './i18n/i18n.service';
import { InfoDiviceService } from './info-divice/info-divice.service';
import { NZConfZorroService } from './ng-zorro/nz-conf-zorro.service';
import { AuthorizationService } from './authorization/authorization.service';
import { ApiPrefixInterceptor } from './http/api-interceptor.service';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FeathersService } from './feathersjs/feathers.service';

export const AppInitInterceptors = {
  provide: HTTP_INTERCEPTORS,
  useClass: ApiPrefixInterceptor,
  multi: true,
};
export const AppInitI18Defaul = {
  provide: NZ_I18N,
  useValue: en_US,
};
export const AppInitI18 = {
  provide: APP_INITIALIZER,
  useFactory: (i18: I18NService) => (): void => {
    return i18.selectLenguage();
  },
  deps: [I18NService],
  multi: true,
};
export const AppInitThemeSystem = {
  provide: APP_INITIALIZER,
  useFactory: (themeService: ThemeService) => (): Promise<Event> => {
    return themeService.loadTheme();
  },
  deps: [ThemeService],
  multi: true,
};
export const AppInitInfDivice = {
  provide: APP_INITIALIZER,
  useFactory: (infoDiviceService: InfoDiviceService) => (): void => {
    return infoDiviceService.infoDivice();
  },
  deps: [InfoDiviceService],
  multi: true,
};
export const AppInitConfNzZorro = {
  provide: APP_INITIALIZER,
  useFactory: (NZ: NZConfZorroService) => (): void => {
    return NZ.nzConfiguration();
  },
  deps: [NZConfZorroService],
  multi: true,
};
export const AppInitFeatherjs = {
  provide: APP_INITIALIZER,
  useFactory: (fs: FeathersService) => (): void => {
    return fs.feather();
  },
  deps: [FeathersService],
  multi: true,
};
export const AppInitAuthorization = {
  provide: APP_INITIALIZER,
  useFactory: (auth: AuthorizationService) => (): void => {
    return;
  },
  deps: [AuthorizationService],
  multi: true,
};
