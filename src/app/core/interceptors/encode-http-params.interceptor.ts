// import { Injectable } from '@angular/core';
// import {
//   HttpEvent,
//   HttpHandler,
//   HttpInterceptor,
//   HttpParams,
//   HttpRequest,
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { CustomEncoder } from '@app/core/utils/custom-encode';

// /**
//  * Custom encoder - replaces default angular by browser encodeURIComponent/decodeURIComponent
//  * @link https://stackoverflow.com/questions/45428842/angular-url-plus-sign-converting-to-space/52458069#52458069
//  * @link https://github.com/angular/angular/issues/18261
//  */
// @Injectable()
// export class EncodeHttpParamsInterceptor implements HttpInterceptor {
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const params = new HttpParams({
//       encoder: new CustomEncoder(),
//       fromString: req.params.toString(),
//     });

//     return next.handle(req.clone({ params }));
//   }
// }
