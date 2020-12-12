import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'Accounts',
    loadChildren: () =>
      import('./modules/accounts/accounts.module').then(
        (m) => m.AccountsModule
      ),
  },
  {
    path: 'Institutions',
    loadChildren: () =>
      import('./modules/institutions/institutions.module').then(
        (m) => m.InstitutionsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
