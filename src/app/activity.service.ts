import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpClient:HttpClient) { }

  getActivity():Observable<any>{
    return this.httpClient.get('https://www.boredapi.com/api/activity');
  }

}
