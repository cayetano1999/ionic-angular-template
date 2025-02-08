import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {

  constructor() {
    
  }

  async uploadFile(filePath: string, file: File): Promise<string> {
    const storageRef = firebase.storage().ref(filePath);
    const snapshot = await storageRef.put(file);
    return snapshot.ref.getDownloadURL();
  }

  async deleteFile(filePath: string): Promise<void> {
    const storageRef = firebase.storage().ref(filePath);
    await storageRef.delete();
  }

  async listFiles(path: string): Promise<string[]> {
    const storageRef = firebase.storage().ref(path);
    const listResult = await storageRef.listAll();
    return listResult.items.map(item => item.fullPath);
  }
}
