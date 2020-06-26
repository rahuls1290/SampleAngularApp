import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { finalize, catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  baseUrl: string;
  myToken = 'mytoken12345'
  constructor() {
    this.baseUrl = environment.apiBaseUrl;
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    request = request.clone({
      headers: request.headers.append('CustomHeader', `Bearer ${this.myToken}`),
    });

    return next.handle(request).pipe(
      retry(1), // Re-try once more in case of failure
      catchError((error: HttpErrorResponse) => {        
        if (error.status === 401) {
          alert('Not Authorized');
        } else {
          return throwError(error);
        }
      }),
      finalize(() => {
        //Add code thats needs to be ran, like hide spinner of request completion
      })
    );
  }
}
