// import {Injectable} from '@angular/core';
// import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
// import {BehaviorSubject, Observable, throwError} from 'rxjs';
// import {catchError, map} from 'rxjs/operators';
// import {endpoints} from '../shared/endpoints';
// import {Router} from '@angular/router';
//
//
// @Injectable()
// export class DevExpressProviders {
//   header: HttpHeaders;
//   // @ts-ignore
//   private currentUserSubject;
//   dataSource: any;
//
//   constructor(private http: HttpClient,
//               private router: Router) {
//     this.setHeader();
//   }
//
//
//   setHeader(): void {
//     // @ts-ignore
//     this.currentUserSubject = (JSON.parse(localStorage.getItem('currentUser')));
//     if (this.currentUserSubject) {
//       this.header = new HttpHeaders()
//         .set('Authorization', `Bearer ${(this.currentUserSubject.token)}`)
//         .set('Access-Control-Allow-Origin', '*')
//         .set('Content-Type', 'application/json');
//     }
//
//   }
//
//
//
//   getAllDevx(primaryKey: string, ext: string): void {
//     this.setHeader();
//     const tokenCheck = this.header.get('Authorization');
//     loadMessages(trMessages);
//     config({
//       defaultCurrency: 'TL'
//     });
//     locale(navigator.language);
//     this.dataSource = AspNetData.createStore({
//       key: primaryKey,
//       loadUrl: ext,
//       insertUrl: ext,
//       updateUrl: ext,
//       deleteUrl: ext,
//       onBeforeSend(method, ajaxOptions) {
//         ajaxOptions.headers = {Authorization: tokenCheck};
//         ajaxOptions.xhrFields = {withCredentials: false};
//       }
//     });
//     return this.dataSource;
//   }
//
//
//   postAll(ext: string, v: any): Observable<any> {
//     this.setHeader();
//     return this.http.post<any>(ext, v, {headers: this.header})
//       .pipe(
//         catchError(error => {
//           console.log("PostAll method within devexrproviders failed!")
//           return throwError('Hata!');
//         })
//       );
//   }
//
//   getAllForModels(ext: string): Observable<any[]> {
//     this.setHeader();
//     return this.http.get(ext, {headers: this.header}).pipe(
//       // @ts-ignore
//       map((data: any[]) => {
//         return data;
//       }), catchError(error => {
//         console.log("getAllForModels method within devexrproviders failed!")
//         return throwError('getRequestType hata!');
//       })
//     );
//   }
//
//   getAllForModel(ext: string): Observable<any> {
//     this.setHeader();
//     return this.http.get(ext, {headers: this.header}).pipe(
//       // @ts-ignore
//       map((data: any[]) => {
//         return data;
//       }), catchError(error => {
//         console.log("getAllForModel method within devexrproviders failed!")
//         return throwError('getRequestType hata!');
//       })
//     );
//   }
//
//   getAllForModelWithPost(ext: string, obj: any): Observable<any> {
//     this.setHeader();
//     return this.http.post(ext, obj, {headers: this.header}).pipe(
//       // @ts-ignore
//       map((data: any[]) => {
//         return data;
//       }), catchError(error => {
//         console.log("getAllForModelWithPost method within devexrproviders failed!")
//         return throwError('getRequestType hata!');
//       })
//     );
//   }
//
//   // tslint:disable-next-line:typedef
//   readSoloOrGroup(primaryKey: string, sg: any, startDate: any, endDate: any) {
//     this.setHeader();
//     const tokenCheck = this.header.get('Authorization');
//     loadMessages(trMessages);
//     locale(navigator.language);
//     this.dataSource = AspNetData.createStore({
//       key: primaryKey,
//       loadParams: {soloOrGroup: sg, startDate, endDate},
//       loadUrl: endpoints.endday.getJobs.path,
//       onBeforeSend(method, ajaxOptions) {
//         ajaxOptions.headers = {Authorization: tokenCheck};
//         ajaxOptions.xhrFields = {withCredentials: false};
//       }
//     });
//     return this.dataSource;
//   }
//
// }
//
//
