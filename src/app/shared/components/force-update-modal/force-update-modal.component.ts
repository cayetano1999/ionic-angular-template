import { Component, inject } from '@angular/core';
import { AppInBrowserService } from 'src/app/core/services/browser/app-in-browser.service';
import { remoteConfig } from 'src/environments/environment.remoteconfig';

@Component({
  selector: 'app-force-update-modal',
  templateUrl: './force-update-modal.component.html',
  styleUrls: ['./force-update-modal.component.scss'],
})
export class ForceUpdateModalComponent {

  title: string = remoteConfig.SCREENS.FORCE_UPDATE.title;
  message: string = remoteConfig.SCREENS.FORCE_UPDATE.message;
  btnUpdateText: string = remoteConfig.SCREENS.FORCE_UPDATE.btnUpdateText;

  //services
  inAppBrowser = inject(AppInBrowserService);

  constructor() { }


  async redirectToUpdate() {
    window.open(remoteConfig.ENVIRONMENTS.URL_APP_ANDROID, '_system');
  }

}
