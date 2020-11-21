
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Vg6DemoComponent } from '../app/routes/layout/vg6-demo/vg6-demo.component';
import { VisDemoComponent } from '../app/routes/layout/vis-demo/vis-demo.component';

const routes: Routes = [
  {
    path: '', component: Vg6DemoComponent, outlet: 'page-1'
  }, {
    path: '', component: VisDemoComponent, outlet: 'page-2'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
