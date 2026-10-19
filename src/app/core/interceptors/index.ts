import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

/** Adds a sample header to every outgoing request. */
export const exampleHeaderInterceptor: HttpInterceptorFn = (req, next) => {
  const request = req.clone({
    setHeaders: { 'X-Example-Header': 'example' },
  });

  return next(request);
};

/** Logs the URL and status of each successful response. */
export const loggingInterceptor: HttpInterceptorFn = (req, next) =>
  next(req).pipe(
    tap((event) => {
      if (event.type === 4) {
        console.log(`${req.method} ${req.url} → ${event.status}`);
      }
    }),
  );
