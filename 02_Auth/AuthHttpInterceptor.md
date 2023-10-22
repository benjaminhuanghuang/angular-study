
```
  ng g class auth/AuthHttpInterceptor
```


```ts
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // req.withCredentials is read-only, so we need to clone the request and set withCredentials to true
    const modifiedReq = req.clone({
      withCredentials: true
    });
    return next.handle(modifiedReq);
  }
}

```

Use the interceptor in auth.module.ts

```ts
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from './auth/auth-http-interceptor';

@NgModule({
  declarations: [
  ],
  imports: [
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor,, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
