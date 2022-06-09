import { IPermissionDefault } from './permission-default.interface';

export interface IUser {
  _id: string;
  name: string;
  surnames: string;
  permissionDefault: IPermissionDefault;
  email: string;
  password: string;
  active: boolean;
  isVerified: boolean;
  verifyToken: string;
  verifyShortToken: string;
  verifyExpires: Date;
  verifyChanges: string;
  resetToken: string;
  resetShortToken: string;
  resetExpires: Date;
  resetAttempts: number;
  createdAt: Date;
  updatedAt: Date;
}
