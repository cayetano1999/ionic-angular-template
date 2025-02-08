import { inject, Injectable } from "@angular/core";
import { StatusBar, Style } from '@capacitor/status-bar';
import { Platform } from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class StatusBarHelper {

  private platfom = inject(Platform)

  constructor() { }

  async setStatusBarStyle(color: string) {
    const darkColors = ['#000000'];

    if (!this.platfom.is('mobileweb') && !this.platfom.is('ios')) {
      try {
        await StatusBar.setBackgroundColor({ color: color });
        if (darkColors.includes(color)) {
          await StatusBar.setStyle({ style: Style.Dark });
        }
        else {
          await StatusBar.setStyle({ style: Style.Light });
        }
        await StatusBar.show()
      }
      catch (err) {
        console.log('Error')
      }

    }
  }

  async hideStatusBar() {
    if (!this.platfom.is('mobileweb') && !this.platfom.is('ios')) {
      try {
        await StatusBar.setBackgroundColor({ color: '#120419' });
        await StatusBar.setStyle({ style: Style.Dark });
      }
      catch (err) {
        console.log('Error')
      }

    }
  }

}


