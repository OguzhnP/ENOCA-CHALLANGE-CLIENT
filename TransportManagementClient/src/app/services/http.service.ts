import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  api : string =environment.api;

  constructor(
    private http : HttpClient
  ) { }



  get<T>(api : string ,callBack : ( res : HttpEvent<T>)=> void,options : any = {}){
    this.http.get<T>(this.api +api,options)
      .subscribe({
        next: (res) =>callBack(res )
      });
  }


  post<T>(api : string , model : any,callBack : ( res : HttpEvent<T>)=> void,options : any = {}){
    this.http.post<T>(this.api +api,model,options)
      .subscribe({
        next: (res) =>callBack(res )
      });
  }


  put<T>(api : string , model : any,callBack : ( res : HttpEvent<T>)=> void,options : any = {}){
    this.http.put<T>(this.api +api,model,options)
      .subscribe({
        next: (res) =>callBack(res )
      });
  }


  delete<T>(api : string ,callBack : ( res : HttpEvent<T>)=> void,options : any = {}){
    this.http.delete<T>(this.api +api,options)
      .subscribe({
        next: (res) =>callBack(res )
      });
  }


}
