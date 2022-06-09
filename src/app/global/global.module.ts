import { NgModule, ModuleWithProviders, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, registerLocaleData } from '@angular/common';
import {
  HttpClientModule,
  HttpClientJsonpModule,
  HttpClient,
} from '@angular/common/http';
import { QuicklinkModule } from 'ngx-quicklink';
import * as appInit from 'src/app/core/app-initializer.service';
import { BidiModule } from '@angular/cdk/bidi';
import ngEn from '@angular/common/locales/en';
import ngEs from '@angular/common/locales/es';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// #region I18n
export function I18nHttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, `./assets/i18n/`, '.json');
}

registerLocaleData(ngEs);
registerLocaleData(ngEn);
const I18nServicesModules = [
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: I18nHttpLoaderFactory,
      deps: [HttpClient],
    },
  }),
];
// #endregion

// #region global third module
const globalThirdModule: Type<any>[] = [BidiModule];
// #endregion

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    QuicklinkModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ...I18nServicesModules,
    ...globalThirdModule,
  ],
  providers: [
    appInit.AppInitAuthorization,
    appInit.AppInitConfNzZorro,
    appInit.AppInitI18,
    appInit.AppInitI18Defaul,
    appInit.AppInitInfDivice,
    appInit.AppInitInterceptors,
    appInit.AppInitThemeSystem,
    appInit.AppInitFeatherjs,
  ],
})
export class GlobalModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: GlobalModule,
    };
  }
}
