import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IHttpRequest } from '../../../shared/interfaces/http-request.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService implements IHttpRequest {
   // Reemplaza con la URL de tu API
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  private http = inject(HttpClient);

  get<T>(baseUrl: string, endpoint: string, params?: any): Observable<T> {
    return this.http.get<T>(`${baseUrl}/${endpoint}`, { params });
  }

  getById<T>(baseUrl: string, endpoint: string, id: string | number): Observable<T> {
    return this.http.get<T>(`${baseUrl}/${endpoint}/${id}`);
  }

  post<T>(baseUrl: string, endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(`${baseUrl}/${endpoint}`, data, {
      headers: this.headers,
    });
  }

  put<T>(baseUrl: string, endpoint: string, id: string | number, data: any): Observable<T> {
    return this.http.put<T>(`${baseUrl}/${endpoint}/${id}`, data, {
      headers: this.headers,
    });
  }

  delete<T>(baseUrl: string, endpoint: string, id: string | number): Observable<T> {
    return this.http.delete<T>(`${baseUrl}/${endpoint}/${id}`);
  }
}
