import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoUserComponent } from './info-user/info-user.component';
import { WelcomeAdmComponent } from './welcome-adm/welcome-adm.component';
import { AddUserAdmComponent } from './entitis/user-adm/add-user-adm/add-user-adm.component';
import { ListUserAdmComponent } from './entitis/user-adm/list-user-adm/list-user-adm.component';
import { EditUserAdmComponent } from './entitis/user-adm/edit-user-adm/edit-user-adm.component';
import { DeleteUserAdmComponent } from './entitis/user-adm/delete-user-adm/delete-user-adm.component';
import { ShowUserAdmComponent } from './entitis/user-adm/show-user-adm/show-user-adm.component';

const routes: Routes = [
  {
    path: 'information',
    component: InfoUserComponent,
  },
  {
    path: 'welcome',
    component: WelcomeAdmComponent,
  },
  {
    path: 'administration',
    children: [
      //Adm
      {
        path: 'addAdm',
        component: AddUserAdmComponent,
      },
      {
        path: 'listAdm',
        component: ListUserAdmComponent,
      },
      {
        path: 'editAdm/:id',
        component: EditUserAdmComponent,
        outlet: 'drawer',
      },
      {
        path: 'deleteAdm',
        component: DeleteUserAdmComponent,
        outlet: 'modal',
      },
      {
        path: 'showAdm/:id',
        component: ShowUserAdmComponent,
        outlet: 'drawer',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmRoutingModule { }
