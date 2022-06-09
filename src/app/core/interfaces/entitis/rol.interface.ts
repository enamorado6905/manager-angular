import { IPermission } from './permission.interface';

export interface IRol {
  _id: string;
  name: string;
  description: string;
  permissions: Array<string>;
  protected: boolean;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}
