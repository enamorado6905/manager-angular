import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutModule } from './auth-layout';
import { AdminLayoutModule } from './admin-layout';
import { UserLayoutModule } from './user-layout';
import { ExceptionModule } from './exception';

@NgModule({
  imports: [
    CommonModule,
    AuthLayoutModule,
    AdminLayoutModule,
    UserLayoutModule,
    ExceptionModule,
  ],
  exports: [
    CommonModule,
    AuthLayoutModule,
    AdminLayoutModule,
    UserLayoutModule,
  ],
})
export class LayoutModule {}
