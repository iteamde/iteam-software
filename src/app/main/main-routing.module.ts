import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'coming-soon',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainComponent,
    children: [{
      path: '', loadChildren: './projects/projects.module#ProjectsModule'
    }]
  },
  {
    path: 'coming-soon',
    component: MainComponent,
    children: [{
      path: '', loadChildren: './coming-soon/coming-soon.module#ComingSoonModule'
    }]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
