import { Observable } from 'rxjs';

export interface IHttpRequest { 
  get<T>(baseUrl: string, endpoint: string, params?: any): Observable<T>;
  getById<T>(baseUrl: string, endpoint: string, id: string | number): Observable<T>;
  post<T>(baseUrl: string, endpoint: string, data: any): Observable<T>;
  put<T>(baseUrl: string, endpoint: string, id: string | number, data: any): Observable<T>;
  delete<T>(baseUrl: string, endpoint: string, id: string | number): Observable<T>;
}
