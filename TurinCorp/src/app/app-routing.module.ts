import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { CustomFormGroupComponent } from 'src/app/components/custom-forms/custom-form-group/custom-form-group/custom-form-group.component';
import { SeguroComponent } from './components/seguro/seguro.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "seguro/:id", component: SeguroComponent},
  // {path: "debug-seguro", component: SeguroComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
