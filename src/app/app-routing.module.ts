import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ForceUpgradeGuard } from './core/guards/force-update.guard';
import { InternetConnectionGuard } from './core/guards/internet-conection.guard';
import { AppMaintenanceGuard } from './core/guards/app-maintenance.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pre-home',
    pathMatch: 'full'
  },
 
  {
    path: 'pre-home',
    loadChildren: () => import('./features/pre-home/pre-home.module').then( m => m.PreHomePageModule),
    canActivate: [AppMaintenanceGuard, InternetConnectionGuard, ForceUpgradeGuard]
  },
  {
    path: 'no-internet',
    loadChildren: () => import('./features/no-internet/no-internet.module').then( m => m.NoInternetPageModule)
  },
  {
    path: 'maintenance',
    loadChildren: () => import('./features/maintenance/maintenance.module').then( m => m.MaintenancePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
