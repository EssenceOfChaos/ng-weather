import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { AboutComponent } from './about/about.component';
import { GraphComponent } from './graph/graph.component';

const routes: Routes = [
  {
    path: 'features', component: FeaturesComponent,
    children: []
  },
  {
    path: 'about', component: AboutComponent
  },
  { path: 'graph', component: GraphComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
