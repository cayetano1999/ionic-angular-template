import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app'; // Importa la compatibilidad con la versión 10.x de Firebase

@Injectable({
    providedIn: 'root'
})

export class FirebaseAppService {
    public initializeFirebaseApp() {
        const app =  firebase.initializeApp(environment.firebaseConfig);
        const analytics = getAnalytics(app);
    }
}