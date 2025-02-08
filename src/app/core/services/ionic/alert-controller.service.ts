import { inject, Injectable } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { CustomLoadingComponent } from 'src/app/shared/components/custom-loading/custom-loading.component';
import { ForceUpdateModalComponent } from 'src/app/shared/components/force-update-modal/force-update-modal.component';
import { ToastControllerService } from './toast-controller.service';
@Injectable({
    providedIn: 'root'
})
export class AlertControllerService {

    private readonly toastCtrl = inject(ToastControllerService);
    private readonly alertController = inject(AlertController);
    private readonly modalCtrl = inject(ModalController);

    constructor() {
    }

    async confirmation(
        ok: (params?: any) => void,
        message: string,
        title: string,
        confirmText: string,
        cancel: (params?: any) => void,
        cancelTextBtn?: string,
    ) {
 
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: title,
            animated: true,
            message: message,
            mode: 'ios',
            buttons: [
                {
                    text: cancelTextBtn || 'Cancelar',
                    role: 'cancel',
                    cssClass: 'text-dark',
                    handler: () => {
                        cancel();
                    }
                }, {
                    text: confirmText,
                    handler: () => {
                        ok();
                    }
                }
            ],
            id: 'ionic-alert'
        });
       
        await alert.present();

    }

    async show(header: string, message: string, textbtn?: string) {
        const alert = await this.alertController.create({
            backdropDismiss: false,
            cssClass: 'my-custom-class',
            header: header,
            message: message,
            mode: 'ios',
            buttons: [
                {
                    text: textbtn || 'Ok',
                    handler: () => {
                    }
                },
            ],
            id: 'ionic-alert'


        });
       
        await alert.present();

        const { role } = await alert.onDidDismiss();
    }

    async showSessionExpired(header: string, message: string, textbtn?: string) {
        const alert = await this.alertController.create({
            backdropDismiss: false,
            cssClass: 'my-custom-class',
            header: header,
            message: message,
            mode: 'ios',
            buttons: [
                {
                    text: textbtn || 'Ok',
                    handler: () => {
                    }
                },
            ],
            id: 'ionic-alert-session-expired'


        });
       
        await alert.present();

        const { role } = await alert.onDidDismiss();
    }

    async error(header: string, message: string) {
        const alert = await this.alertController.create({
            backdropDismiss: false,
            cssClass: 'my-custom-class',
            header: header,
            message: message,
            mode: 'ios',
            buttons: [
                {
                    text: 'Ok',
                    cssClass: 'text-danger',
                    handler: () => {
                    }
                },
            ],
            id: 'ionic-alert'


        });

       
        await alert.present();

        await alert.onDidDismiss();
    }

    async dismiss() {
        await this.alertController.dismiss();
        await this.modalCtrl.dismiss();
    }

    async openModalAlert(title?: string, message?: string, img?: string, btnClass?: string) {
        const modalLoading = await this.modalCtrl.create({
            component: CustomLoadingComponent,
            id: 'modal-loading',
            cssClass: 'backdrop-modal',
            backdropDismiss: false,
            componentProps: {
            }
          });
          setTimeout(async () => {
            const element = document.getElementById('modal-loading');
            if (element) {
                this.toastCtrl.showToastError('Error al cargar la información');
                await this.modalCtrl.dismiss();
            }
          }, 60000);
          await modalLoading.present();
          
    }

    async openForceUpdateAlert() {
        const modalLives = await this.modalCtrl.create({
            component: ForceUpdateModalComponent,
            cssClass: 'backdrop-modal',
            backdropDismiss: false,
            componentProps: {
            },
            initialBreakpoint: 1,      
      
          });
          await modalLives.present();
          const result = await modalLives.onDidDismiss();
    }

  
}
