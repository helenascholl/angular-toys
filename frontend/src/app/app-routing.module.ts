import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { BuyComponent } from './buy/buy.component';

const routes: Routes = [
  { path: '', component: ListComponent, pathMatch: 'full' },
  { path: 'buy/:id', component: BuyComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
