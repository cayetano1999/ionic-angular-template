import { Injectable } from '@angular/core';
import { Browser } from '@capacitor/browser'; 

@Injectable({
  providedIn: 'root'
})
export class AppInBrowserService {

  constructor() { }

  public async openUrl(url: string): Promise<void> {
    try {
      await Browser.open({ url: url, presentationStyle: 'popover',  toolbarColor: '#282F33'  });
    } catch (error) {
      console.error('Error al abrir la URL en el navegador in-app:', error);
    }
  }

  public async closeBrowser(): Promise<void> {
    try {
      await Browser.close();
    } catch (error) {
      console.error('Error al cerrar el navegador in-app:', error);
    }
  }
}
