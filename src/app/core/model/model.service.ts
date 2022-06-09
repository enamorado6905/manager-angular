import { Injectable } from '@angular/core';
import { UserAdm } from './user-adm.model';
import * as typeSystem from 'src/app/store/type-system';
import { User } from './user.model';
import { Category } from './category.model';
import { Product } from './product.model';
import { ColorProduct } from './color-product.model';
import { SizeProduct } from './size-product.model';
import { Permission } from './permission.model';
import { PermissionDefault } from './permission-default.model';
import { Rol } from './rol.model';
import { UploadPhoto } from './upload-photo.model';
@Injectable({
  providedIn: 'root',
})
export class ModelService {
  constructor() {}

  /**
   * entitiJson
   */
  public entitiJson(type: typeSystem.typeEntitis, entiti: UserAdm) {
    switch (type) {
      case 'UserAdm':
        return UserAdm.userAdmJson(entiti);
      case 'User':
        return User.userJson(entiti);
      case 'Category':
        return Category.categoryJson(entiti);
      case 'Product':
        return Product.ProductJson(entiti);
      case 'ColorProduct':
        return ColorProduct.colorProductJson(entiti);
      case 'SizeProduct':
        return SizeProduct.sizeProductJson(entiti);
      case 'Permission':
        return Permission.permissionJson(entiti);
      case 'PermissionDefault':
        return PermissionDefault.permissionDefaultJson(entiti);
      case 'Rol':
        return Rol.rolJson(entiti);
      case 'UploadPhoto':
        return UploadPhoto.uploadPhotoJson(entiti);
      default:
        return UserAdm.userAdmJson(entiti);
    }
  }
}
