import { Component, OnInit } from '@angular/core';
import { projects } from './projects.model';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss']
})
export class AllProjectsComponent implements OnInit {

  projects = projects;

  constructor() { }

  ngOnInit() {
  }

}
