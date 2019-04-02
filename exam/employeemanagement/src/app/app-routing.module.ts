import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmplistComponent } from './emplist/emplist.component';
import { AddempComponent } from './addemp/addemp.component';

const routes: Routes = [{ path: 'emplist', component: EmplistComponent },{ path: '', redirectTo: '/emplist', pathMatch: 'full' },{ path: 'addemp', component: AddempComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  
}
