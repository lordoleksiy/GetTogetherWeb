import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  get<T>(url: string): Observable<T>{
    return this.httpClient.get<T>(this.buildUrl(url));
  }

  getById<T>(url: string, id: string | number): Observable<T>{
    return this.httpClient.get<T>(this.buildUrl(url, id));
  }

  post<T>(url: string, resource:any):Observable<T>{
    return this.httpClient.post<T>(this.buildUrl(url), resource);
  }

  private buildUrl(url: string, id: any = null): string{
    if (id){
      return `${this.baseUrl}${url}/${id}`;
    }
    return this.baseUrl + url;
  }
}
