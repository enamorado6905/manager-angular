import {
  Component,
  OnDestroy,
  Output,
  EventEmitter,
  Input,
  AfterContentChecked,
  OnInit,
} from '@angular/core';
import { Paginated } from '@feathersjs/feathers';
import { Observable, Subscription } from 'rxjs';
import * as typeSystem from 'src/app/store/type-system';
import { Category } from 'src/app/core/model/category.model';
import { ColorProduct } from 'src/app/core/model/color-product.model';
import { SizeProduct } from 'src/app/core/model/size-product.model';
import { Product } from 'src/app/core/model/product.model';
import { Permission } from 'src/app/core/model/permission.model';
import { PermissionDefault } from 'src/app/core/model/permission-default.model';
import { Rol } from 'src/app/core/model/rol.model';
import { NzSelectModeType } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-select-entits',
  templateUrl: './entitis.component.html',
})
export class ItemEntitisSelectsComponent implements OnInit, OnDestroy {
  private subscription: Array<Subscription> = [];
  public entitis: Array<any> = [];
  public ids: Array<string> = [];
  public Get: any;
  public initLoading = false;
  private limit = 10000;
  private observer!: Observable<Paginated<any>>;

  public type!: typeSystem.typeEntitis;
  @Input() nzPlaceHolder!: string;
  @Input() typeEntiti!: typeSystem.typeEntitis;
  @Input() typeSelect: NzSelectModeType = 'default';
  @Output() idEntitis = new EventEmitter<string[]>();
  @Input('editEntiti') set category(data: Array<any>) {
    if (data && data.length >= 1) {
      data.forEach(async (m: Category) => {
        this.ids.push(m._id);
      });
    } else {
      this.ids = [];
    }
  }
  @Input('addEntiti') set addEntiti(data: Array<string>) {
    if (data && data.length >= 1) {
      this.ids = data;
    } else {
      this.ids = [];
    }
  }

  constructor(
  ) { }

  ngOnDestroy(): void {
    this.subscription.forEach((m) => m.unsubscribe());
  }
  ngOnInit(): void {
    this.typeobserverEntiti();
  }
  sendICategory(): any {
    return this.entitis.length === 0 ? null : this.idEntitis.emit(this.ids);
  }
  private query(): object {
    return { $limit: this.limit, $skip: 0 };
  }
  private typeobserverEntiti(): void {
    switch (this.typeEntiti) {
      default:
        break;
    }
  }
}
