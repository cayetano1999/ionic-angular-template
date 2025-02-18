import { Component, inject } from '@angular/core';
import { App } from '@capacitor/app';
import { StatusBarHelper } from 'src/app/core/helpers/status-bar.helper';
import { remoteConfig } from 'src/environments/environment.remoteconfig';

@Component({
    selector: 'app-maintenance',
    templateUrl: './maintenance.page.html',
    styleUrls: ['./maintenance.page.scss'],
    standalone: false
})
export class MaintenancePage   {
  texts = remoteConfig.SCREENS.MAINTENANCE;
  statusBarHelper = inject(StatusBarHelper);
  constructor() { }

  ionViewWillEnter() {
    this.statusBarHelper.setStatusBarStyle('#FFFFFF');
   }

   closeApp() {
    App.exitApp();
   }

}
