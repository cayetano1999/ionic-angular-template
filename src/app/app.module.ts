import { registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import * as es from '@angular/common/locales/es';
import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './core/interceptors/default.interceptor';
import { ApiService } from './core/services/api/api.service';
import { FirebaseAnalyticsService } from './core/services/firebase/firebase-analytics.service';
import { FirebaseRemoteConfigService } from './core/services/firebase/firebase-remote-config.service';
import { FirebaseAppService } from './core/services/firebase/firebase.app.service';
import { PipesModule } from './shared/pipes/pipes.module';
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(
      {
        mode: 'ios',
        backButtonText: '',
        swipeBackEnabled: false,
        hardwareBackButton: false
      }),
    AppRoutingModule,
    PipesModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    HttpClient,
  {
    provide: APP_INITIALIZER,
    useFactory: function (remoteConfig: FirebaseRemoteConfigService, firebase: FirebaseAppService) {
      async function asyncInitializer(): Promise<void> {
        await firebase.initializeFirebaseApp();// Initialize Firebase With Your Credentials
        await remoteConfig.loadConfig(); // Load Remote Config Values With Your Configurations
      }
      return asyncInitializer;
    },
    deps: [FirebaseRemoteConfigService, FirebaseAppService],
    multi: true
  },
    ApiService,
    HttpClient,
    FirebaseAnalyticsService,
  provideHttpClient(
    withInterceptorsFromDi() // Si utilizas interceptores en tu aplicación
  ),
  { provide: LOCALE_ID, useValue: 'es' }

  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(es.default); //Then register the language
  }
}
