import { Injectable } from '@angular/core';
import * as feathersRx from 'feathers-reactive';
import * as io from 'socket.io-client';
import feathers from '@feathersjs/feathers';
import feathersSocketIOClient from '@feathersjs/socketio-client';
import feathersAuth from '@feathersjs/authentication-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FeathersService {
  private _feathers = feathers();
  private _socket = feathersSocketIOClient(
    io(environment.apiEntitis, {
      transports: ['websocket'],
      forceNew: true,
      timeout: 100000,
    })
  );
  private _aurh = feathersAuth({
    storage: window.localStorage,
    path: '/v1/authentication',
  });
  private _feathersRX = feathersRx({
    idField: '_id',
  });

  constructor() {}

  // expose services
  public service(name: string) {
    return this._feathers.service(name);
  }

  // expose authentication
  public async authenticate(credentials?: any): Promise<any> {
    return await this._feathers.authenticate(credentials);
  }

  // expose logout
  public async logout(): Promise<any> {
    return await this._feathers.logout();
  }
  feather(): void {
    this._feathers
      .configure(this._aurh)
      .configure(this._socket)
      .configure(this._feathersRX);
  }
}
