import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptionHelper {

  private secretKey = 'TuClaveSecreta'; //TODO: COLOCAR EN FIREBASE

  constructor() { }

  encryptText(text: string): string {
    return CryptoJS.AES.encrypt(text, this.secretKey).toString();
  }

  decryptText(ciphertext: string): string {
    const bytes = CryptoJS.AES.decrypt(ciphertext, this.secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}
