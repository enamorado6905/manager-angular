import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroModule } from 'src/app/core/ng-zorro/ng-zorro.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WidwedtsModule } from 'src/app/widgets';

import { ExceptionRoutingModule } from './exception-routing.module';
import { ExceptionTriggerComponent } from './exception-trigger/exception-trigger.component';
import { Exception404Component } from './exception404/exception404.component';
import { Exception403Component } from './exception403/exception403.component';
import { Exception500Component } from './exception500/exception500.component';

@NgModule({
  declarations: [
    Exception500Component,
    Exception403Component,
    Exception404Component,
    ExceptionTriggerComponent,
  ],
  imports: [
    CommonModule,
    ExceptionRoutingModule,
    NgZorroModule,
    FormsModule,
    ReactiveFormsModule,
    WidwedtsModule,
    TranslateModule,
  ],
})
export class ExceptionPagesModule {}
