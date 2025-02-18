import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { StatusBarHelper } from 'src/app/core/helpers/status-bar.helper';
import { AlertControllerService } from 'src/app/core/services/ionic/alert-controller.service';

@Component({
    selector: 'app-no-internet',
    templateUrl: './no-internet.page.html',
    styleUrls: ['./no-internet.page.scss'],
    standalone: false
})
export class NoInternetPage {

  router = inject(Router);
  alertCtrl = inject(AlertControllerService);
  modalCtrl = inject(ModalController);
  statusBarHelper = inject(StatusBarHelper);
  constructor() { }


  async ionViewWillEnter() {
    await this.statusBarHelper.setStatusBarStyle('#000000');
  }

  retryConecction(){
    this.alertCtrl.openModalAlert('', '', '', '');
    setTimeout(async () => {
     await  this.modalCtrl.dismiss();
     this.router.navigate(['/']);
    }, 3000);

  }

}
