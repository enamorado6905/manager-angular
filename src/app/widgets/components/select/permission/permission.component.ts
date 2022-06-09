import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { Paginated } from '@feathersjs/feathers';
import { Observable, Subscription } from 'rxjs';
import { Permission } from 'src/app/core/model/permission.model';

@Component({
  selector: 'app-select-permissions',
  templateUrl: './permission.component.html',
})
export class ItemPermissionSelectsComponent implements OnInit, OnDestroy {
  private subscription: Array<Subscription> = [];
  public permissions: Array<Permission> = [];
  public idPermissions: string | null = null;
  public GetIPermissionDefault: any;
  public initLoading = false;
  private limit = 10000;
  private observerPermission!: Observable<Paginated<Permission>>;
  @Output() eventPermissions = new EventEmitter<string>();
  @Input('permission') set permissionDefault(permission: string) {
    if (permission) {
      this.idPermissions = permission;
    } else {
      this.idPermissions = null;
    }
  }

  constructor() {
    this.subscription.push(this.subscribe());
  }

  ngOnDestroy(): void {
    this.subscription.forEach((m) => m.unsubscribe());
  }
  ngOnInit(): void { }
  sendIPermission(): any {
    return this.permissions.length > 1 && this.idPermissions
      ? this.eventPermissions.emit(this.idPermissions)
      : null;
  }
  private observer(query: any) {
  }
  private subscribe(): Subscription {
    this.initLoading = true;
    return this.observerPermission.subscribe((data: Paginated<Permission>) => {
      if (data.data.length >= 1) {
        this.permissions = data.data;
      }
      this.initLoading = false;
    });
  }
  private query(): object {
    return { $limit: this.limit, $skip: 0 };
  }
}
