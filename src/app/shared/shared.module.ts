import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconsProviderModule } from '../icons-provider.module';
import { AppBreadcrumbComponent } from './admin/app-breadcrumb/app-breadcrumb.component';
import { WidwedtsModule } from '../widgets';
import { AppNavbarComponent } from './admin/app-navbar/app-navbar.component';
import { FooterComponent } from './admin/app-footer/footer.component';
import { AppSidebarComponent } from './admin/app-sidebar/app-sidebar.component';

@NgModule({
  declarations: [
    AppNavbarComponent,
    FooterComponent,
    AppSidebarComponent,
    AppBreadcrumbComponent,
  ],
  exports: [
    RouterModule,
    AppNavbarComponent,
    FooterComponent,
    AppSidebarComponent,
    AppBreadcrumbComponent,
  ],
  imports: [CommonModule, WidwedtsModule, IconsProviderModule, WidwedtsModule],
})
export class SharedModule {}
