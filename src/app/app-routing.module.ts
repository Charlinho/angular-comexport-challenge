import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'estatisticas',
    loadChildren: '@app/statistics/statistics.module#StatisticsModule'
  },
  {
    path: '**',
    redirectTo: 'personagens',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
