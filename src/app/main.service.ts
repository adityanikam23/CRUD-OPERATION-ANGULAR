import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) {


  }

  get(url: string) {
    return this.http.get(url);
  }
  
  edit(url : string, data : any){
    return this.http.put(url, data);
  }

  delete(url : string){
    return this.http.delete(url);
  }
}
