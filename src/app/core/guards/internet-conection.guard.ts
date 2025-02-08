import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { RoutesApp } from "../enums/routes.enum";
import { AlertControllerService } from "../services/ionic/alert-controller.service";
import { Network } from "@capacitor/network";

@Injectable({
    providedIn: 'root',
})
export class InternetConnectionGuard implements CanActivate {

    router = inject(Router);

    async canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<boolean | UrlTree> {
        const isConnected = await Network.getStatus();
        if (!isConnected.connected) {
            return this.router.parseUrl(RoutesApp.NO_INTERNET);
        }
        return true;
    }
}
