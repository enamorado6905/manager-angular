import { Injectable } from '@angular/core';
import { Paginated } from '@feathersjs/feathers';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FeathersService } from './feathers.service';
import { NotificationService } from 'src/app/service/configuration/notification/notification.service';
import { ModelService } from 'src/app/core/model/model.service';
import * as typeSystem from 'src/app/store/type-system';

@Injectable({
  providedIn: 'root',
})
export class OperationService {
  constructor(
    private feathers: FeathersService,
    private notification: NotificationService,
    private modelService: ModelService
  ) {}

  find(
    service: string,
    query: object,
    type: typeSystem.typeEntitis
  ): Observable<Paginated<any>> {
    return this.feathers
      .service(service)
      .watch({ listStrategy: 'always' })
      .find({ query })
      .pipe(
        map((res: Paginated<any>) => {
          res.data = res.data.map((entiti: any) => {
            return this.modelService.entitiJson(type, entiti);
          });
          return res;
        })
      );
  }
  findOne(
    service: string,
    data: object,
    type: typeSystem.typeEntitis
  ): Observable<any> {
    return this.feathers
      .service(service)
      .watch()
      .findOne(data)
      .pipe(map((m: any) => this.modelService.entitiJson(type, m)));
  }
  get(
    service: string,
    _id: string,
    type: typeSystem.typeEntitis
  ): Observable<any> {
    return this.feathers
      .service(service)
      .watch()
      .get({ _id })
      .pipe(map((m: any) => this.modelService.entitiJson(type, m)));
  }
  async create(service: string, data: object): Promise<any> {
    try {
      const entiti = await this.feathers.service(service).create(data);
      this.notification.createNotificationSuccess();
      return entiti;
    } catch (error: any) {
      console.log(error);
      this.notification.createNotificationError(error.message);
      return false;
    }
  }
  async delete(service: string, _id: string): Promise<any> {
    try {
      await this.feathers.service(service).remove({ _id });
      this.notification.createNotificationSuccess();
      return true;
    } catch (error: any) {
      this.notification.createNotificationError(error.message);
      return false;
    }
  }
  async deletes(service: string, _ids: Array<string>): Promise<any> {
    try {
      await this.feathers
        .service(service)
        .remove(null, { query: { _id: { $in: _ids } } });
      this.notification.createNotificationSuccess();
      return true;
    } catch (error: any) {
      this.notification.createNotificationError(error.message);
      return false;
    }
  }
  async patch(service: string, _id: string, data: object): Promise<any> {
    try {
      await this.feathers.service(service).patch(_id, data);
      this.notification.createNotificationSuccess();
      return true;
    } catch (error: any) {
      this.notification.createNotificationError(error.message);
      return false;
    }
  }
  async update(service: string, _id: string, data: object): Promise<any> {
    try {
      await this.feathers.service(service).update(_id, data);
      this.notification.createNotificationSuccess();
      return true;
    } catch (error: any) {
      this.notification.createNotificationError(error.message);
      return false;
    }
  }
}
