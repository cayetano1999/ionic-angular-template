import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { RoutesApp } from "../enums/routes.enum";
import { AlertControllerService } from "../services/ionic/alert-controller.service";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
})
export class AppMaintenanceGuard implements CanActivate {
    constructor(private router: Router) {}

    async canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<boolean | UrlTree> {
        if (environment.APP_MAINTENANCE) {
            return this.router.parseUrl(RoutesApp.APP_MAINTENANCE);
        }
        return true;
    }
}
