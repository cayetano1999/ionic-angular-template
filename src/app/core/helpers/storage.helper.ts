import { Injectable, inject } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { EncryptionHelper } from './encryption.helper';
import { StorageKeys } from '../enums/storage.keys.enum';


@Injectable({
  providedIn: 'root'
})
export class StorageHelper {
  constructor() {}

  private encryptor = inject(EncryptionHelper)

  async setStorageKey(key: StorageKeys, value: any): Promise<void> {
    let valueString = JSON.stringify(value);
    await Preferences.set({
      key: key,
      value: this.encryptor.encryptText(valueString),
    });
  }

  async clear(): Promise<void> {
    await Preferences.clear();
  }

  async removeStorageKey(key: string): Promise<void> {
    await Preferences.remove({ key: key });
  }

  async getStorageKey<T>(key: string): Promise<any> {
    if (key != null) {
      const data = await Preferences.get({ key: key });
      if (data.value != null) {
        let values = this.encryptor.decryptText(data.value as any);
        
        try {
          return JSON.parse(values);
        } catch (error) {
          console.error('Storage', values);
          return values;
        }
      }
    }
    return null;
  }

}
