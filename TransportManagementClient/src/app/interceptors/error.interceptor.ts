import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err : HttpErrorResponse) =>{

         switch (err.status) {
          case 404:
            console.log("Yazdığınız api geçersiz");
          break;
          case 500:
            console.log("Server'a ulaşılamıyor");
          break;
          case 500:
            console.log("Ulaşılamayan api");
          break;
          default:
            console.log(err);
            break;
         }
         return of();
      })
    );
  }
}
