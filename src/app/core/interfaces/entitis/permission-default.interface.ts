import { IRol } from './rol.interface';

export interface IPermissionDefault {
  _id?: string;
  name: string;
  rol: Array<IRol>;
  protected: Boolean;
  active: Boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
