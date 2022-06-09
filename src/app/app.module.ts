import { NgModule } from '@angular/core';

import { GlobalModule } from './global';
import { CoreModule } from './core';
import { SharedModule } from './shared';
import { LayoutModule } from './layouts';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { ExceptionComponent } from './layouts/exception/exception.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    UserLayoutComponent,
    ExceptionComponent,
  ],
  imports: [
    GlobalModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
