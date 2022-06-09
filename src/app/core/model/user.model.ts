import { IPermissionDefault } from '../interfaces/entitis/permission-default.interface';

export class User {
  static userJson(object: any) {
    const user = new User(
      object['_id']!,
      object['names'],
      object['surnames'],
      object['permissionDefault'],
      object['email'],
      object['password'],
      object['active'],
      object['createdAt'],
      object['updatedAt']
    );
    return user;
  }

  constructor(
    public _id: string,
    public names: string,
    public surnames: string,
    public permissionDefault: IPermissionDefault,
    public email: string,
    public password: string,
    public active: boolean,
    public createdAt: Date,
    public updatedAt: Date,
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
   * get fullName
   */
  public get fullName(): string {
    return `${this.names} ${this.surnames}`;
  }
}
