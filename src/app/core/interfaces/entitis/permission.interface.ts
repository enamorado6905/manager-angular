export interface IPermission {
  _id: string;
  name: string;
  description: string;
  active: boolean;
  isprotected: boolean;
  createdAt: Date;
  updatedAt: Date;
}
