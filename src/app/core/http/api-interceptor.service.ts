import { Injectable, Injector } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpResponseBase,
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { catchError, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
//import { AuthorizationService } from 'app/core/authorization/rol.authorization';
/**
 * Prefixes all requests with `environment.baseUrl`.
 */

@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {
  constructor(private injector: Injector, private http: HttpClient) {}

  private goTo(url: string): void {
    setTimeout(() => this.injector.get(Router).navigateByUrl(url));
  }
  private checkStatus(ev: HttpResponseBase): void {
    let subscribe: any;
    switch (ev.status) {
      case 0:
        break;
      case 200:
        break;
      case 201:
        break;
      case 401:
        break;
      case 500:
        break;
    }
  }
  private handleData(
    ev: HttpResponseBase,
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<any> {
    this.checkStatus(ev);
    switch (ev.status) {
      case 0:
        return of(null);
      case 200:
        return of(ev);
      case 201:
        return of(ev);
      case 401:
        return of(ev);
      case 500:
        return of(ev);
      default:
        return of(null);
    }
  }
  private addAutHeader(req: HttpRequest<any>): HttpRequest<any> {
    return req;
  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = this.addAutHeader(req);
    return next.handle(req).pipe(
      mergeMap((ev) => {
        if (ev instanceof HttpResponseBase) {
          return this.handleData(ev, req, next);
        } else {
          return of(ev);
        }
      }),
      catchError((err: HttpErrorResponse) => {
        return this.handleData(err, req, next);
      })
    );
  }
}
