import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class NocacheInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      // Si la solicitud no es GET, continúa el flujo normal
      if (req.method !== 'GET') {
        return next.handle(req);
      }
  
      // Si la solicitud es GET, clona la solicitud original y agrega un encabezado de control de caché
      const noCacheReq = req.clone({
        headers: req.headers.set('Cache-Control', 'no-cache')
      });
  
      // Continúa el flujo normal de la solicitud y controla la respuesta para evitar que se almacene en caché
      return next.handle(noCacheReq).pipe(
        tap((event) => {
          if (event instanceof HttpResponse) {
            event.headers.set('Cache-Control', 'no-cache');
          }
        })
      );
  }
}
