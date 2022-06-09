import { IPermissionDefault } from '../interfaces/entitis/permission-default.interface';

export class UserAdm {
  static userAdmJson(object: any) {
    const user = new UserAdm(
      object['_id']!,
      object['name'],
      object['lastnameone'],
      object['lastnametwo'],
      object['permissionDefault'],
      object['email'],
      object['password'],
      object['active'],
      object['createdAt'],
      object['updatedAt'],
      object['nametwo']
    );
    return user;
  }

  constructor(
    public _id: string,
    public name: string,
    public lastnameone: string,
    public lastnametwo: string,
    public permissionDefault: IPermissionDefault,
    public email: string,
    public password: string,
    public active: boolean,
    public createdAt: Date,
    public updatedAt: Date,
    public nametwo?: string,
    public isVerified?: boolean,
    public verifyToken?: string,
    public verifyShortToken?: string,
    public verifyExpires?: Date,
    public verifyChanges?: string,
    public resetToken?: string,
    public resetShortToken?: string,
    public resetExpires?: Date,
    public resetAttempts?: number
  ) {}

  /**
   * get lastName
   */
  public get lastName(): string {
    return `${this.lastnameone} ${this.lastnametwo}`;
  }

  /**
   * get fullName
   */
  public get fullName(): string {
    return `${this.name} ${this.nametwo} ${this.lastnameone} ${this.lastnametwo}`;
  }
}
