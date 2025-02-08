import { inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  authService = inject(AuthService);
  router = inject(Router);

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    

    return from(this.authService.getToken()).pipe( 
      switchMap((token: string | null) => {
        const clonedRequest = req.clone({
          setHeaders: {
            'Content-Type': 'application/json',
            Authorization: token ? `Bearer ${token}` : '', 
          },
        });

        // Manejo de la solicitud
        return next.handle(clonedRequest).pipe(
          catchError((error: HttpErrorResponse) => {
            if (error.status === 401) {
              // Si la respuesta es 401, intentar obtener un nuevo token llamando al método login
              return {} as Observable<any>;
            }
            return of(error);
          })
        );
      })
    );
  }
}
