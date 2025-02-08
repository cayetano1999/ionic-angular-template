import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageHelper } from '../helpers/storage.helper';
import { StorageKeys } from '../enums/storage.keys.enum';
@Injectable({
    providedIn: 'root',
})
export class OnboardingGuard implements CanActivate {
    constructor() {
    }

    storage = inject(StorageHelper);
    router = inject(Router);
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const result = new Promise<boolean>(async (resolve, reject) => {
           
            const onboardingCompleted = await this.storage.getStorageKey(StorageKeys.ONBOARDING_COMPLETED);
            if (!onboardingCompleted) {
                this.router.navigate(['YOUR_ROUTE']);
                reject(false);
            }
            else {
                resolve(true);
            }
        });
        return result;
    }
}
