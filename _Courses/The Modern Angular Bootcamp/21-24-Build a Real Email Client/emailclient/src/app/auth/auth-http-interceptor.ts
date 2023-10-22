import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';


@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // req.withCredentials is read-only, so we need to clone the request and set withCredentials to true
    const modifiedReq = req.clone({
      withCredentials: true
    });

    return next.handle(modifiedReq).pipe(
      filter(val => val.type === HttpEventType.Sent),
      tap(val => {
        // console.log('tap', val);
        if (val.type === HttpEventType.Sent) {
          console.log('Request was sent to server');
        }
        if (val.type === HttpEventType.Response) {
          console.log('Got a response from the API', val);
        }
      })
    );
  }
}
