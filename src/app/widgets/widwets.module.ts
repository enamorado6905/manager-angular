import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/app/core/ng-zorro/ng-zorro.module';
import { TranslateModule } from '@ngx-translate/core';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { ItemBlockComponent } from './items/block/block.component';
import { ItemButtonResetComponent } from './items/button/button-reset.component';
import { ItemButtonSearchComponent } from './items/button/button-search.component';
import { ItemButtonSendComponent } from './items/button/button-send.component';
import { ItemHomeComponent } from './items/home/home.component';
import { ItemListSidebarComponent } from './items/list-sidebar/list-sidebar.component';
import { ItemLogoComponent } from './items/logo/logo.component';
import { ItemTabSidebarComponent } from './items/tab-sidebar/tab-sidebar.component';
import { ItemThemesComponent } from './items/themes/themes.component';
import { AppSearchComponent } from './items/search/app-search/app-search.component';
import { ItemGeneralSettingComponent } from './items/setting/general-setting.component';
import { ItemFormInputComponent } from './components/form/input/input.component';
import { ItemListComponent } from './components/list-entitis/list/list.component';
import { ItemPaginationComponent } from './components/list-entitis/pagination/pagination.component';
import { ItemOperationComponent } from './components/list-entitis/operation/operation.component';
import { ItemAvatarComponent } from './components/photos/avatar/avatar.component';
import { ItemLoadPhotoComponent } from './components/photos/load-photo/load-photo.component';
import { ItemShowPhotoComponent } from './components/photos/show-photo/show-photo.component';
import { ItemException403Component } from './exception/403.component';
import { ItemException500Component } from './exception/500.component';
import { ItemException404Component } from './exception/404.component';
import { ItemExceptionTriggerComponent } from './exception/trigger.component';
import { ItemDeleteEntitisComponent } from './components/delete-entitis/delete-entitis.component';
import { ItemSearchValueComponent } from './items/search/search-value/search-value-active-verified.component';
import { ItemButtonOperationComponent } from './items/button/button-operation.component';
import { FormatFileSizePipe } from './pipes/load/format-file-size.pipe';
import { YesNoPipe } from './pipes/yes-no/yes-no.pipe';
import { NullUndefinedPipe } from './pipes/null-undefined/null-undefined.pipe';
import { ItemPermissionSelectsComponent } from './components/select/permission/permission.component';
import { ItemAddFileComponent } from './components/files/addfiles.component';
import { ItemAddPhotoComponent } from './components/files/addPhoto.component';
import { ItemEntitisSelectsComponent } from './components/select/entitis/entitis.component';

@NgModule({
  declarations: [
    ItemBlockComponent,
    ItemButtonResetComponent,
    ItemButtonSearchComponent,
    ItemButtonSendComponent,
    ItemButtonOperationComponent,
    ItemHomeComponent,
    ItemListSidebarComponent,
    ItemLogoComponent,
    ItemTabSidebarComponent,
    ItemThemesComponent,
    AppSearchComponent,
    ItemSearchValueComponent,
    ItemGeneralSettingComponent,
    ItemFormInputComponent,
    ItemListComponent,
    ItemPaginationComponent,
    ItemOperationComponent,
    ItemAvatarComponent,
    ItemLoadPhotoComponent,
    ItemShowPhotoComponent,
    ItemException403Component,
    ItemException500Component,
    ItemException404Component,
    ItemExceptionTriggerComponent,
    ItemPermissionSelectsComponent,
    ItemDeleteEntitisComponent,
    ItemAddFileComponent,
    ItemAddPhotoComponent,
    ItemEntitisSelectsComponent,
    FormatFileSizePipe,
    YesNoPipe,
    NullUndefinedPipe,
  ],
  exports: [
    ItemBlockComponent,
    ItemButtonResetComponent,
    ItemButtonSearchComponent,
    ItemButtonSendComponent,
    ItemButtonOperationComponent,
    ItemHomeComponent,
    ItemListSidebarComponent,
    ItemLogoComponent,
    ItemTabSidebarComponent,
    ItemThemesComponent,
    AppSearchComponent,
    ItemSearchValueComponent,
    ItemGeneralSettingComponent,
    ItemFormInputComponent,
    ItemListComponent,
    ItemPaginationComponent,
    ItemOperationComponent,
    ItemAvatarComponent,
    ItemLoadPhotoComponent,
    ItemShowPhotoComponent,
    ItemException403Component,
    ItemException500Component,
    ItemException404Component,
    ItemExceptionTriggerComponent,
    ItemPermissionSelectsComponent,
    ItemDeleteEntitisComponent,
    ItemAddFileComponent,
    ItemAddPhotoComponent,
    ItemEntitisSelectsComponent,
    FormatFileSizePipe,
    YesNoPipe,
    NullUndefinedPipe,
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroModule,
    IconsProviderModule,
    TranslateModule,
  ],
})
export class WidwedtsModule { }
