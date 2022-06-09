import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ExceptionComponent } from './layouts/exception/exception.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'adm',
    pathMatch: 'full',
  },
  {
    path: 'exception',
    component: ExceptionComponent,
    loadChildren: () =>
      import('./pages/exception').then((m) => m.ExceptionPagesModule),
  },
  {
    path: 'adm',
    component: AdminLayoutComponent,
    loadChildren: () => import('./pages/adm').then((m) => m.AdmPagesModule),
  },
  { path: '**', redirectTo: 'exception/404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
