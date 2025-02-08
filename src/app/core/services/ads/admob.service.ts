import { inject, Injectable } from '@angular/core';
import { AdMob, AdOptions, BannerAdOptions, BannerAdPosition, RewardAdOptions, BannerAdSize } from '@capacitor-community/admob';
import { Platform } from '@ionic/angular';
import { remoteConfig } from 'src/environments/environment.remoteconfig';

@Injectable({
  providedIn: 'root'
})
export class AdmobService {

  // Propiedades
  isBannerVisible: boolean = false; 
  ads = remoteConfig.ADS;

  // Servicios
  platform = inject(Platform);
  constructor() {
    this.initialize();
  }
  async initialize() {
    await AdMob.initialize();
  }

  async showBannerAd(margin: number) {

    if(!remoteConfig.ENVIRONMENTS.ENABLE_ADS_BANNERS) {
      return;
    }
    const options: BannerAdOptions = {
      adId: this.ads.android.banner,
      adSize: BannerAdSize.ADAPTIVE_BANNER,
      position: BannerAdPosition.BOTTOM_CENTER,
      margin: margin,
      isTesting: remoteConfig.ENVIRONMENTS.IS_TESTING
    };

    if(this.platform.is('ios')) { 
      options.adId = this.ads.ios.banner;
    }

    try {
      await AdMob.showBanner(options);
      this.isBannerVisible = true;  
      
    } catch (error) {
      console.error('Error showing banner:', error);
    }
  }


  async showInterstitialAd() {
    if(!remoteConfig.ENVIRONMENTS.ENABLE_ADS) {
      return;
    }
    const options: AdOptions = {
      adId: this.ads.android.interstitial,
      isTesting: remoteConfig.ENVIRONMENTS.IS_TESTING

    };

    if(this.platform.is('ios')) { 
      options.adId = this.ads.ios.interstitial;
    }

    await AdMob.prepareInterstitial(options);
    await AdMob.showInterstitial();
  }

  async showRewardedAd() {
    if(!remoteConfig.ENVIRONMENTS.ENABLE_ADS) {
      return;
    }

    const options: RewardAdOptions = {
      adId: this.ads.android.rewarded,
      isTesting: remoteConfig.ENVIRONMENTS.IS_TESTING
    };
  
    if(this.platform.is('ios')) { 
      options.adId = this.ads.ios.rewarded;
    }
    try {
      await AdMob.prepareRewardVideoAd(options);
      await AdMob.showRewardVideoAd();
      return true;
    } catch (error) {
      console.error('Error preparing or showing the rewarded ad:', error);
      return true;
    }
  }

  async resumeBannerAd() { 
    if(!remoteConfig.ENVIRONMENTS.ENABLE_ADS_BANNERS) {
      return;
    }
    return await AdMob.resumeBanner();
  }

  async hideBannerAd() {
    if(!remoteConfig.ENVIRONMENTS.ENABLE_ADS_BANNERS) {
      return;
    }
    try {
      await AdMob.hideBanner();
      this.isBannerVisible = false;  
      
    } catch (error) {
      console.error('Error hiding banner:', error);
    }
  } 
  
}
