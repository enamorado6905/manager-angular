import { Injectable } from '@angular/core';
import { Paginated } from '@feathersjs/feathers';
import { Observable } from 'rxjs';
import { OperationService } from 'src/app/core/feathersjs/operation.service';
import { UserAdm } from 'src/app/core/model/user-adm.model';
import { Url } from 'src/app/store/url';
import * as typeSystem from 'src/app/store/type-system';

@Injectable({
  providedIn: 'root',
})
export class UsersadmService {
  private typeEntiti: typeSystem.typeEntitis = 'UserAdm';

  constructor(private operation: OperationService) { }

  findUseradm$(query: object): Observable<Paginated<UserAdm>> {
    return this.operation.find(Url.feathersUserAdm, query, this.typeEntiti);
  }
  findOnUseradm$(data: object): Observable<UserAdm> {
    return this.operation.findOne(Url.feathersUserAdm, data, this.typeEntiti);
  }
  getUseradm$(_id: string): Observable<UserAdm> {
    return this.operation.get(Url.feathersUserAdm, _id, this.typeEntiti);
  }
  async createUseradm$(data: object): Promise<boolean> {
    return await this.operation.create(Url.feathersUserAdm, data);
  }
  async deleteUserAdm$(_id: string): Promise<any> {
    return await this.operation.delete(Url.feathersUserAdm, _id);
  }
  async deletesUserAdm$(_ids: Array<string>): Promise<any> {
    return await this.operation.deletes(Url.feathersUserAdm, _ids);
  }
  async updateUserAdm$(_id: string, data: object): Promise<any> {
    return await this.operation.update(Url.feathersUserAdm, _id, data);
  }
  async patchUserAdm$(_id: string, data: object): Promise<any> {
    return await this.operation.patch(Url.feathersUserAdm, _id, data);
  }
}
