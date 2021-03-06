import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable(
  { providedIn: 'root' }
)
export class ApiService {

  constructor(private http: HttpClient) {}

  public get<T>(url: string): Observable<T> {
    return this.http.get<T>(`${environment.apiUrl}/${url}`);
  }

  public post<T>(url: string, params?: HttpParams): Observable<T> {
    return this.http.post<T>(`${environment.apiUrl}/${url}`, params);
  }
}
