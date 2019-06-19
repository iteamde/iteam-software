import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllProjectsComponent } from './all-projects/all-projects.component';

const projectRoutes: Routes = [
  {
    path: '',
    component: AllProjectsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(projectRoutes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
