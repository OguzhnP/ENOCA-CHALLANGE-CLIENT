import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http : HttpClient,
    @Inject("baseUrl") private baseUrl :string
  ) { }

  baseUrlUpdate(url: string): string {
    return url.startsWith('/') ? this.baseUrl + url : url;
  }
  getReq<T>(url : any) :Observable<T> {
    return this.http.get<T>(this.baseUrlUpdate(url));
  }
  postReq<T>(url : any,body : any):Observable<T>{
    return this.http.post<T>(this.baseUrlUpdate(url),body);
  }

  putReq<T>(url : any, id : any , body : any): Observable<T>{
    return this.http.patch<T>(`${this.baseUrlUpdate(url)}/${id}`,body);
  }
  deleteReq<T>(url : any,id : any): Observable<T>{
    return this.http.delete<T>(`${this.baseUrlUpdate(url)}/${id}`);
  }

  getByIdReq(url : any ,id : any){
    return this.http.get<any>(`${this.baseUrlUpdate(url)}/${id}`);
  }



  // getReq(url: any) {
  //   return this.http.get<any>(this.baseUrlUpdate(url), {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json; charset=utf-8',
  //       'Access-Control-Allow-Origin': this.baseUrlUpdate(url),
  //     }),
  //   });
  // }
  // postReq(url: any, data: any) {
  //   return this.http.post<any>(this.baseUrlUpdate(url), data, {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json; charset=utf-8',
  //       'Access-Control-Allow-Origin': this.baseUrlUpdate(url),
  //     }),
  //   });
  // }
  // deleteReq(url: any, id: string) {
  //   return this.http.post<any>(this.baseUrlUpdate(url), id, {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json; charset=utf-8',
  //       'Access-Control-Allow-Origin': this.baseUrlUpdate(url),
  //     }),
  //   });
  // }

  // putReq(url: any, data: any) {
  //   return this.http.put<any>(this.baseUrlUpdate(url), data, {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json; charset=utf-8',
  //       'Access-Control-Allow-Origin': this.baseUrlUpdate(url),
  //     }),
  //   });
  // }



}
