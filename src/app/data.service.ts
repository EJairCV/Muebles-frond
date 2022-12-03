import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private Http:HttpClient) { }
  public get(url:string){
    return this.Http.get(url);
  }
  public post(url:string,body:any){
    return this.Http.post(url,body);
  }
  public delete(url:string){
    return this.Http.delete(url);
  }
  public put(url:string,body:any){
    return this.Http.put(url,body);
  }
}
