
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Vg6DemoComponent } from '../app/vg6-demo/vg6-demo.component';


const routes: Routes = [
  {
    path: '', component: Vg6DemoComponent, outlet: 'page-1'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
