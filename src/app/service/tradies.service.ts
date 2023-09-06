import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TradiesService {

  constructor(private http:HttpClient) { } 
  

  getTrades() {
   return this.http.get(`${environment.API_HOST}/free-view/trades`);
  }

  searchTradie(location:string,trade:string[]){

    return this.http.post(`${environment.API_HOST}/free-view/find-tradie`,{data:{location,trade}});
  }




  
}
