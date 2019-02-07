// import {
//   Injectable,
//   Injector,
// } from '@angular/core';
// import {
//   HttpEvent,
//   HttpInterceptor,
//   HttpHandler,
//   HttpRequest,
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { ApiService } from '..';
// // import { ApiService } from '@app/core';

// /**
//  * Adds 'Authorization' header and withCredentials: true to all requests (if auth token is present)
//  */
// @Injectable()
// export class AuthHeaderInterceptor implements HttpInterceptor {
//   constructor(private injector: Injector) {}

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const api = this.injector.get(ApiService);
//     // const authHeader = api.getAuthorizationHeader();

//     // // Make an exception for twilio, otherwise we have problems with CORS.
//     // if (!authHeader || /https:\/\/[^/]*twilio.com\//.test(req.url)) {
//     //   return next.handle(req);
//     // }

//     // Clone the request to add the new headers.
//     // const extendedReq = req.clone({
//     //   headers: req.headers.set('Authorization', authHeader),
//     //   withCredentials: true,
//     // });

//     // Pass on the cloned request instead of the original request.
//     // return next.handle(extendedReq);
//   }
// }
