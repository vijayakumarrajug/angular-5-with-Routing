import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsercomponentComponent }   from './usercomponent/usercomponent.component';
import { HerosComponent } from './heros/heros.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: UsercomponentComponent },
  { path: 'heroes', component: HerosComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}