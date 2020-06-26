import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpWrapperService {

  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiBaseUrl;
  }

  put<T>(url: string, body: any, isSilent: boolean = false): Observable<T> {
    return this.http.put<T>(this.baseUrl + url, body);
  }

  delete<T>(url: string, isSilent: boolean = false): Observable<T> {
    return this.http.delete<T>(this.baseUrl + url);
  }

  patch<T>(url: string, body: string, isSilent: boolean = false): Observable<T> {
    return this.http.patch<T>(this.baseUrl + url, body);
  }

  get<T>(url: string, isSilent: boolean = false): Observable<T> {
    return this.http.get<T>(this.baseUrl + url);
  }

  post<T>(url: string, body: any, isSilent: boolean = false): Observable<T> {
    return this.http.post<T>(this.baseUrl + url, body);
  }
}
