import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { inject, Injectable } from '@angular/core';
import { App } from '@capacitor/app';
import { RoutesApp } from '../../enums/routes.enum';
import { AlertControllerService } from '../ionic/alert-controller.service';

@Injectable({
  providedIn: 'root',
})
export class BackButtonService {
  constructor(){}
  private readonly router = inject(Router)
  private readonly modalCtrl = inject(ModalController);
  private readonly alertCtrl = inject(AlertControllerService)

  public async backBtnManager(navegationHistory: string[]) {

    const currentUrl = this.router.url;

      if(currentUrl === RoutesApp.HOME) { 
        this.alertCtrl.confirmation(()=>{
          App.exitApp();
        }, '¿Estás seguro que deseas salir de la aplicación?', 'Salir', 'Si, salir', ()=> {});
        return;
      }

       const modal = await this.modalCtrl.getTop();
        if(modal) {
          this.modalCtrl.dismiss();
          return;
        }

      if (navegationHistory.length > 1) {
        const isHome = navegationHistory[navegationHistory.length - 1] === RoutesApp.HOME;
        if(isHome) {
          navegationHistory = ['/home'];
          this.router.navigate([RoutesApp.HOME]);
          return;
        }
        navegationHistory.pop();
        this.router.navigate([navegationHistory[navegationHistory.length - 1]]);
      }
      else {
        navegationHistory = ['/home'];
        this.router.navigate([ RoutesApp.HOME]);
      }
  }
  


}
