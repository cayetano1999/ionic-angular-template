import { Injectable, inject } from '@angular/core';
import { ApiService } from 'src/app/core/services/api/api.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { StorageKeys } from '../../enums/storage.keys.enum';
import { StorageHelper } from '../../helpers/storage.helper';

const BASE_URL = environment.URL_API;
const routes = {
  root: `${BASE_URL}/auth`,
  login: () => `${environment.URL_API}/auth/login`
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Inyectar ApiService y StorageHelper
  private apiService = inject(ApiService);
  private storageHelper = inject(StorageHelper);

  constructor() { }

  // Método para hacer login y almacenar el token
  public login(email: string, password: string): Observable<any> {
      return  this.apiService.post(BASE_URL, routes.login(), { email, password });
  }

  // Método para obtener el token almacenado
  public async getToken(): Promise<any> {
    try {
      const token = await this.storageHelper.getStorageKey(StorageKeys.TOKEN);
      
      return token;
    } catch (error) {
      console.error('Error getting token:', error);
      return null; // Si no hay token, se devuelve null
    }
  }

  // Método para eliminar el token (si es necesario)
  public async logout(): Promise<void> {
    try {
      await this.storageHelper.removeStorageKey(StorageKeys.TOKEN);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  }

  public isTokenExpired(token: string): boolean {
    if (!token) {
      return true; // Si no hay token, se considera expirado
    }

    const payload = this.decodeToken(token); // Decodificamos el token para obtener el payload
    const currentTime = Math.floor(Date.now() / 1000); // Obtener el tiempo actual en segundos

    return payload.exp < currentTime; // Comparamos la fecha de expiración con el tiempo actual
  }

  // Método para decodificar el token y obtener el payload
  private decodeToken(token: string): any {
    const base64Url = token.split('.')[1]; // El payload está en la segunda parte del token (base64Url)
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Decodificar caracteres especiales

    const decodedPayload = JSON.parse(atob(base64)); // Decodificamos y parseamos el payload
    return decodedPayload;
  }
}
