import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, from, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { StorageHelper } from '../helpers/storage.helper';
import { environment } from 'src/environments/environment';
import { StorageKeys } from '../enums/storage.keys.enum';
import { AlertControllerService } from '../services/ionic/alert-controller.service';
import { remoteConfig } from 'src/environments/environment.remoteconfig';

@Injectable({
    providedIn: 'root',
})
export class ForceUpgradeGuard implements CanActivate {

    storage = inject(StorageHelper);
    alertCtrl =  inject(AlertControllerService);
    constructor() {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> {

        // Si la actualización forzada está desactivada, permitir acceso
        if (!remoteConfig.FEATURE_FLAGS.FORCE_UPDATE.active) {
            return of(true);
        }

        return from(this.checkVersion()).pipe(
            map(isUpToDate => {
                if (!isUpToDate) {
                    this.alertCtrl.openForceUpdateAlert();
                    return false;
                }
                return true;
            }),
            catchError(() => of(false)) // En caso de error, bloquea el acceso
        );
    }

    private async checkVersion(): Promise<boolean> {
        const currentVersion: number = Number(environment.APP_VERSION.replace(/\./g, ''));
        const lessVersion: number = Number(environment.LESS_VERSION.replace(/\./g, ''));

        if (currentVersion < lessVersion) {
            await this.storage.setStorageKey(StorageKeys.PENDING_UPDATE, 'true');
            return false;
        }
        await this.storage.setStorageKey(StorageKeys.PENDING_UPDATE, 'false');
        return true;
    }
}
