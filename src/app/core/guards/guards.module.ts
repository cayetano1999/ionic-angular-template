import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForceUpgradeGuard } from './force-update.guard';
import { OnboardingGuard } from './onboarding.guard';
import { InternetConnectionGuard } from './internet-conection.guard';
import { AppMaintenanceGuard } from './app-maintenance.guard';
import { homeGuard } from './can-deactivate/home.guard';

@NgModule({
    declarations: [ForceUpgradeGuard, OnboardingGuard, InternetConnectionGuard, AppMaintenanceGuard],
    imports: [ CommonModule ],
    exports: [ForceUpgradeGuard, OnboardingGuard, InternetConnectionGuard, AppMaintenanceGuard ],
    providers: [],
})
export class GuardsModule {}