import { inject, Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastControllerService {

  private readonly toastController = inject(ToastController);
  constructor() {

  }

  async showMessageToast(message: string){
    const toast = await this.toastController.create({
      animated: true,
      message: message,
      translucent: true,
      duration: 5000,
      position: 'bottom',
      color:'dark',
      icon: 'chatbubble-outline',
      cssClass: 'custom-toast-message'
    });

    toast.present();
  }

  async showToast(message: string){
    const toast = await this.toastController.create({
      animated: true,
      message: message,
      translucent: true,
      duration: 50000,
      position: 'top',
      color:'dark'
    });

    toast.present();
  }

  async showToastSuccess(message: string, icon: string, duration: number, css: string){
   const toast = await this.toastController.create({
      animated: true,
      message: message,
      translucent: true,
      duration: duration || 5000,
      position: 'top',
      color: 'success',
      icon: icon || 'checkmark',
      cssClass: css || ''
    });
    toast.present();

  }

  async showToastError(message: string){
    const toast = await this.toastController.create({
      animated: true,
      message: message,
      translucent: true,
      duration: 5000,
      position: 'top',
      color: 'danger',
      icon: 'close'

    });
    
    toast.present();
  }

  async showToastWarning(message: string){
    const toast = await this.toastController.create({
      animated: true,
      message: message,
      translucent: true,
      duration: 5000,
      position: 'bottom',
      color: 'warning',
    });
    
    toast.present();
  }
}
