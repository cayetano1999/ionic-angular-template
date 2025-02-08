import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';
import { Keyboard } from '@capacitor/keyboard';
import { NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KeyboardService {
  private keyboardVisible = new BehaviorSubject<boolean>(false);
  keyboardVisible$ = this.keyboardVisible.asObservable();

  platform = inject(Platform);
  ngZone = inject(NgZone);

  constructor() {
    if (this.platform.is('android') || this.platform.is('ios')) {
      this.listenToKeyboardEvents();
    }
  }

  private listenToKeyboardEvents() {
    Keyboard.addListener('keyboardDidShow', () => {
      this.ngZone.run(() => {
        this.keyboardVisible.next(true);
      });
    });

    Keyboard.addListener('keyboardDidHide', () => {
      this.ngZone.run(() => {
        this.keyboardVisible.next(false);
      });
    });
  }

  // Método opcional para obtener el estado actual del teclado
  getKeyboardState() {
    if (this.platform.is('android') || this.platform.is('ios')) {
      return false;
    }
    return this.keyboardVisible.value;
  }

  async hideKeyboard() {
    if (this.platform.is('android') || this.platform.is('ios')) {
      return false;
    }
   return await Keyboard.hide();
  }

  async showKeyboard() {
    if (this.platform.is('android') || this.platform.is('ios')) {
      return false;
    }
   return await Keyboard.show();
  }
}
