// import { throwError as observableThrowError, Observable } from 'rxjs';
// import { Injectable } from '@angular/core';
// import {
//   HttpEvent,
//   HttpInterceptor,
//   HttpHandler,
//   HttpRequest,
// } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
// import { CookieService } from '@app/core/services/application/cookie.service';
// import { catchError } from 'rxjs/operators';

// /**
//  * Catches and handles all server errors here
//  */
// @Injectable()
// export class HandleErrorInterceptor implements HttpInterceptor {
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     return next.handle(req).pipe(catchError((error) => {
//       // Special types of errors are handled by auth-guard.
//       if (error && error.status) {
//         switch (error.status) {
//           case 423:
//             window.location.href = `${ environment.apiOldUrl }/admin/user/agree-on-rules`;
//             break;
//           case 401:
//             CookieService.unset('authToken');
//             window.location.href = `${ environment.apiOldUrl }/site/logout`;
//             break;
//           case 403:
//             document.location.href = `${ environment.apiOldUrl }/site/logout`;
//             break;
//         }

//         return observableThrowError(error);
//       }

//       return observableThrowError('An error has occurred, please try again.');
//     }));
//   }
// }
