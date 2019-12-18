import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabsPages/tabs/tabs.module').then(m => m.TabsPageModule)
    
  },
  {
    path: 'pasos', 
    loadChildren: () => import('./pages/pasos/pasos.module').then( m => m.PasosPageModule)
  },
  {
    path: 'bpms',
    loadChildren: () => import('./pages/bpms/bpms.module').then( m => m.BpmsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}