import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { FirebaseDocument } from '../../enums/firebase.document.enum';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDatabaseService {
  
  constructor() {

  }

  async setValue(value: any, doc: FirebaseDocument) {
    const newItem = firebase.database().ref(doc);
    return newItem.push(value, complete => {
    });
  }

  async updateValue(value: any, doc: FirebaseDocument): Promise<void> {
    await firebase.database().ref(doc).update(value);
  }

  async getValue(doc: FirebaseDocument): Promise<any> {
    const snapshot = await firebase.database().ref(doc).once('value');
    return snapshot;
  }

  
  async deleteValue(doc: FirebaseDocument): Promise<void> {
    await firebase.database().ref(doc).remove();
  }

  update(key: string, data: any, doc: FirebaseDocument) {
    return firebase.database().ref(doc +'/'+ key).update(data);
  }

  remove(key: string, doc: FirebaseDocument) {
    return firebase.database().ref(doc  +'/'+ key).remove();
  }

  async get(document: string, keyToFilter: string, value: any) {
    return firebase.database().ref(document)
      .orderByChild(keyToFilter).equalTo(value)
      .once("value", snapshot => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          return true;
        }
        return false;
      });
  }
  //With Document

}
