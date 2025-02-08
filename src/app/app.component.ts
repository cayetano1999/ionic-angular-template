import { Component, inject, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ScreenOrientation } from '@capacitor/screen-orientation';
import { remoteConfig } from 'src/environments/environment.remoteconfig';
import { environment } from 'src/environments/environment';
import { CommunicationService } from './core/services/comunication/communication.service';
import { NavigationEnd, Router } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { FirebaseAnalyticsService } from './core/services/firebase/firebase-analytics.service';
import { RoutesApp } from './core/enums/routes.enum';
import { BackButtonService } from './core/services/back-button/back-button.service';
import { Network } from '@capacitor/network';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  //Properties
  public version = environment.APP_VERSION
  public menuOptions = remoteConfig.OPTIONS_ITEMS.options as any;
  public availableMenu: boolean = false;
  public loadingAds: boolean = false;
  public navegationHistory: string[] = [];
  //Services
  private readonly platform = inject(Platform)
  private readonly communicationService = inject(CommunicationService)
  private readonly router = inject(Router)
  private readonly analitycsService = inject(FirebaseAnalyticsService);
  private readonly backBtnService = inject(BackButtonService);

  constructor() {
    this.router.events.subscribe(async event => {
      if (event instanceof NavigationEnd) {
        const screen = event.url.split('/').pop() || '';
        ['home', 'pre-home', 'onboarding'].includes(screen) ? null : this.analitycsService.setCurrentScreen(screen);


        const excludesUrl = ['pre-home', 'onboarding', ''].includes(screen);
        if (!excludesUrl) {

          if (this.navegationHistory.length > 0) {
            const lastUrl = this.navegationHistory[this.navegationHistory.length - 1];
            if (lastUrl === event.url) {
              return;
            }
          }
          this.navegationHistory.push(event.url);
        }
      }
    });

    this.platform.backButton.subscribeWithPriority(10, async () => {

      await this.backBtnService.backBtnManager(this.navegationHistory);
    });

  }
  async ngOnInit() {

    const isConnected = await Network.getStatus();
    if (!isConnected.connected) {
       this.router.parseUrl(RoutesApp.NO_INTERNET);
       return;
    }

    if (!this.platform.is('mobileweb')) {
      await ScreenOrientation.lock({ orientation: 'portrait' });
    }
    this.communicationService.message$.subscribe(() => {
      this.availableMenu = true;
    });
    await this.initializeApp();

  }

  async initializeApp() {
    this.communicationService.message$.subscribe(() => {
      this.availableMenu = true;
    });
  }

  handleItemSelected(item: any) {
    console.log('Item selected:', item);
  }
}
