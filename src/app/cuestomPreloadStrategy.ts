import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class cuestomPreloadStrategy implements PreloadingStrategy {
  preload(router: Route, fn: () => Observable<any>): Observable<any> {
    return of(null);
  }
}
