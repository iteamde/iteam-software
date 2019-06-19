import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsRoutingModule } from './projects.routing';

@NgModule({
  declarations: [
    AllProjectsComponent,
    ProjectComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
