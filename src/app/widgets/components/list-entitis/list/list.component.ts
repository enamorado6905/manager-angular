import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { Paginated } from '@feathersjs/feathers';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { Observable, Subscription } from 'rxjs';
import { InfoDiviceService } from 'src/app/core/info-divice/info-divice.service';
import { Category } from 'src/app/core/model/category.model';
import { ColorProduct } from 'src/app/core/model/color-product.model';
import { PermissionDefault } from 'src/app/core/model/permission-default.model';
import { Permission } from 'src/app/core/model/permission.model';
import { Product } from 'src/app/core/model/product.model';
import { Rol } from 'src/app/core/model/rol.model';
import { SizeProduct } from 'src/app/core/model/size-product.model';
import { UploadPhoto } from 'src/app/core/model/upload-photo.model';
import { UserAdm } from 'src/app/core/model/user-adm.model';
import { User } from 'src/app/core/model/user.model';
import { ComunicationEntitisService } from 'src/app/service/configuration/listEntitis/comunicationEntitis.service';
import { ListEntitisService } from 'src/app/service/configuration/listEntitis/listEntitis.service';
import { QueryEntitisService } from 'src/app/service/configuration/listEntitis/querysEntitis.service';
import { UsersadmService } from 'src/app/service/entitis/usersadm/usersadm.service';
import * as typeSystem from 'src/app/store/type-system';

@Component({
  selector: 'app-component-list',
  templateUrl: './list.component.html',
})
export class ItemListComponent implements OnInit, OnDestroy {
  private subscription: Array<Subscription> = [];
  public type!: typeSystem.typeEntitis;

  public fillValue: string | null = null;
  public fillActive: boolean | null = null;
  public fillVerified: boolean | null = null;
  public arrayLabel: Array<{ label: string }> = [];
  public labelsMedia: Array<{ label: string }> = [
    { label: 'validation.name.label' },
    { label: 'validation.nameArtist.label' },
    { label: 'validation.year.label' },
    { label: 'validation.country.label' },
    { label: 'validation.active.label' },
  ];
  public labelsAdm: Array<{ label: string }> = [
    { label: 'validation.name.label' },
    { label: 'validation.active.label' },
    { label: 'validation.verified.label' },
  ];
  public labelsUser: Array<{ label: string }> = [
    { label: 'validation.name.label' },
    { label: 'validation.active.label' },
    { label: 'validation.verified.label' },
  ];
  public labelsNameActive: Array<{ label: string }> = [
    { label: 'validation.name.label' },
    { label: 'validation.active.label' },
  ];
  public labelsProduct: Array<{ label: string }> = [
    { label: 'validation.photo.label' },
    { label: 'validation.name.label' },
    { label: 'validation.quantityProducts.label' },
    { label: 'validation.category.label' },
    { label: 'validation.active.label' },
  ];
  public labelsSecurity: Array<{ label: string }> = [
    { label: 'validation.name.label' },
    { label: 'validation.active.label' },
    { label: 'validation.protected.label' },
  ];
  public labelsColorProduct: Array<{ label: string }> = [
    { label: 'validation.name.label' },
    { label: 'validation.active.label' },
  ];
  public labelsSizeProduct: Array<{ label: string }> = [
    { label: 'validation.size.label' },
    { label: 'validation.bust.label' },
    { label: 'validation.waist.label' },
    { label: 'validation.hips.label' },
    { label: 'validation.active.label' },
  ];
  public labelsUploadPhoto: Array<{ label: string }> = [
    { label: 'validation.photo.label' },
    { label: 'validation.active.label' },
  ];

  private observerUserAdmServices!: Observable<Paginated<UserAdm>>;
  private observerUserServices!: Observable<Paginated<User>>;
  private observerProductServices!: Observable<Paginated<any>>;
  private observerSizeProductServices!: Observable<Paginated<any>>;
  private observerColorProductServices!: Observable<Paginated<any>>;
  private observerCategoryServices!: Observable<Paginated<Category>>;
  private observerPermissionServices!: Observable<Paginated<any>>;
  private observerPermissionDefaultServices!: Observable<Paginated<any>>;
  private observerRolServices!: Observable<Paginated<any>>;
  private observerUploadPhotoServices!: Observable<Paginated<any>>;

  @Input() initLoading: boolean = true;
  @Input() allData: number = 0;
  @Input() pageIndex: number = 1;
  @Input() routerShow: string = '';
  @Input() routerEdit: string = '';
  @Input() routerDelete: string = '';
  @Input() skip: number = 0;
  @Input() limit: number = 10;
  @Output() observerEntitis!: Observable<any>;
  @Output() query = new EventEmitter<{ limit: number; skip: number }>();
  @Input('typeEntiti') set typeEntiti(entiti: typeSystem.typeEntitis) {
    this.type = entiti;
    switch (entiti) {
      case 'UserAdm':
        this.arrayLabel = this.labelsAdm;
        break;
      case 'User':
        this.arrayLabel = this.labelsUser;
        break;
      case 'Category':
        this.arrayLabel = this.labelsNameActive;
        break;
      case 'Product':
        this.arrayLabel = this.labelsProduct;
        break;
      case 'ColorProduct':
        this.arrayLabel = this.labelsColorProduct;
        break;
      case 'SizeProduct':
        this.arrayLabel = this.labelsSizeProduct;
        break;
      case 'Permission':
        this.arrayLabel = this.labelsSecurity;
        break;
      case 'PermissionDefault':
        this.arrayLabel = this.labelsSecurity;
        break;
      case 'Rol':
        this.arrayLabel = this.labelsSecurity;
        break;
      case 'UploadPhoto':
        this.arrayLabel = this.labelsUploadPhoto;
        break;
      default:
        this.arrayLabel = this.labelsAdm;
        break;
    }
  }
  constructor(
    public listEntitis: ListEntitisService,
    public comunication: ComunicationEntitisService,
    public infoDivice: InfoDiviceService,
    private useradmService: UsersadmService,
    private queryEntitis: QueryEntitisService
  ) {
    this.subscribeList();
  }

  async ngOnDestroy(): Promise<void> {
    await Promise.all([
      this.listEntitis.clearSetIdDelete(),
      this.subscription.forEach((m) => m.unsubscribe()),
    ]);
  }

  ngOnInit(): void { }

  async onQueryParamsChange(params: NzTableQueryParams): Promise<void> {
    this.listEntitis.skip = (params.pageIndex - 1) * params.pageSize;
    this.listEntitis.limit = params.pageSize;
    this.ngOnDestroy();
    this.typeobserverEntiti();
  }

  /**
   *
   * @returns boolean
   */
  private observerList(): Observable<boolean> {
    return this.listEntitis.isListEmpty;
  }


  private subscribeList(): Subscription {
    return this.observerList().subscribe({
      next: async () => {
        await Promise.all([
          (this.listEntitis.allData = 0),
          (this.listEntitis.pageIndex = 1),
          (this.listEntitis.skip = 0),
          (this.listEntitis.limit = 10),
        ]);
        await this.ngOnDestroy();
        this.typeobserverEntiti();
      },
      error: (e: any) => console.error(e),
      complete: () => { },
    });
  }


  observerUserAdm(): Observable<Paginated<UserAdm>> {
    return this.useradmService.findUseradm$(this.queryValueVerifiedActive());
  }


  subscribeUserAdm(): Subscription {
    this.listEntitis.initLoading = true;
    return this.observerUserAdmServices.subscribe({
      next: (data: Paginated<UserAdm>) => this.listEntitis.checkedList(data),
      error: (e: any) => {
        console.error(e);
      },
      complete: () => { },
    });
  }

  /**
   *
   * @returns
   */
  queryValueVerifiedActive(): any {
    return this.queryEntitis.queryValueVerifiedActive(
      this.fillValue,
      this.fillVerified,
      this.fillActive,
      this.listEntitis.limit,
      this.listEntitis.skip
    );
  }
  /**
   *
   * @returns
   */
  queryValueActive(): any {
    return this.queryEntitis.queryValueActive(
      this.fillValue,
      this.fillActive,
      this.listEntitis.limit,
      this.listEntitis.skip
    );
  }

  /**
   *
   */
  async search(): Promise<void> {
    await Promise.all([
      (this.listEntitis.pageIndex = 1),
      (this.listEntitis.skip = 0),
      this.ngOnDestroy(),
    ]);
    return this.typeobserverEntiti();
  }

  private typeobserverEntiti(): void {
    switch (this.type) {
      case 'UserAdm':
        this.observerUserAdmServices = this.observerUserAdm();
        this.subscription.push(this.subscribeUserAdm());
        break;
      default:
        break;
    }
  }
}
