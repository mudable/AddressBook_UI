import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAddressFormComponent } from './Componenet/add-address-form/add-address-form.component';
import { DashBoardComponent } from './Componenet/dash-board/dash-board.component';


const routes: Routes = [
  {path:"addForm", component:AddAddressFormComponent },
  {path:"dashboard",component:DashBoardComponent},
  {path : 'update/:id',component:AddAddressFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
