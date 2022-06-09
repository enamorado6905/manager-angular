import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroModule } from './ng-zorro/ng-zorro.module';
import { throwIfAlreadyLoaded } from './module-import-guard';
@NgModule({
  imports: [CommonModule, HttpClientModule, NgZorroModule],
  exports: [NgZorroModule],
  providers: [],
})
export class CoreModule {
  /* make sure CoreModule is imported only by one NgModule the AppModule */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
