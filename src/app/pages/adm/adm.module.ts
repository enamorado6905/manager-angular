import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroModule } from 'src/app/core/ng-zorro/ng-zorro.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WidwedtsModule } from 'src/app/widgets';
import { TranslateModule } from '@ngx-translate/core';

import { InfoUserComponent } from './info-user/info-user.component';
import { WelcomeAdmComponent } from './welcome-adm/welcome-adm.component';
import { AddUserAdmComponent } from './entitis/user-adm/add-user-adm/add-user-adm.component';
import { EditUserAdmComponent } from './entitis/user-adm/edit-user-adm/edit-user-adm.component';
import { ListUserAdmComponent } from './entitis/user-adm/list-user-adm/list-user-adm.component';
import { ShowUserAdmComponent } from './entitis/user-adm/show-user-adm/show-user-adm.component';
import { DeleteUserAdmComponent } from './entitis/user-adm/delete-user-adm/delete-user-adm.component';
import { AdmRoutingModule } from './adm-routing.module';

@NgModule({
  declarations: [
    InfoUserComponent,
    WelcomeAdmComponent,
    AddUserAdmComponent,
    EditUserAdmComponent,
    ListUserAdmComponent,
    ShowUserAdmComponent,
    DeleteUserAdmComponent,
  ],
  imports: [
    CommonModule,
    AdmRoutingModule,
    NgZorroModule,
    FormsModule,
    ReactiveFormsModule,
    WidwedtsModule,
    TranslateModule,
  ],
})
export class AdmPagesModule { }
