import { Injectable } from "@angular/core";
import firebase from 'firebase/compat/app'; // Importa la compatibilidad con la versión 10.x de Firebase
import 'firebase/compat/remote-config';
import { environment } from "src/environments/environment";
import { remoteConfig } from "src/environments/environment.remoteconfig";

@Injectable({
    providedIn: 'root'
})

export class FirebaseRemoteConfigService {


    async fetchAndActivate(): Promise<void> {
        const remoteConfig = firebase.remoteConfig();
        await remoteConfig.fetchAndActivate();
    }

    async getValue(key: string) {
        const remoteConfig = firebase.remoteConfig();
        return remoteConfig.getValue(key);
    }

    async getAllValues() {
        const remoteConfig = firebase.remoteConfig();
        remoteConfig.settings.fetchTimeoutMillis = 0;
        remoteConfig.settings.minimumFetchIntervalMillis = 0;
        await remoteConfig.fetchAndActivate();
        return remoteConfig.getAll();
    }


    async loadConfig() {

        const result = await this.getAllValues();
        const keys = Object.keys(remoteConfig);
        keys.forEach(element => {
            remoteConfig[element as keyof Object] = JSON.parse(result[element]?.asString()) as any;
        });

        const environmentKeys = Object.keys(environment).filter(o => o != 'firebaseConfig' && o != 'production'  && o != 'APP_VERSION');
        environmentKeys.forEach(element => {

            environment[element as keyof Object] = JSON.parse(result['ENVIRONMENTS'].asString())[element] as any;
        })
    }
}