import { Rol } from './rol.model';

export class PermissionDefault {
  static permissionDefaultJson(object: any) {
    return new PermissionDefault(
      object['_id']!,
      object['name'],
      object['rol'],
      object['isProtected'],
      object['active'],
      object['createdAt'],
      object['updatedAt']
    );
  }

  constructor(
    public _id: string,
    public name: string,
    public rol: Array<Rol>,
    public isProtected: boolean,
    public active: boolean,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}
