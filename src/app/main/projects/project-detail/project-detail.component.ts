import { Component, OnInit } from '@angular/core';
import {projects} from "../all-projects/projects.model";
import {Router, ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  project;

  constructor(private router: Router, private activatedRouter : ActivatedRoute) { }

  ngOnInit() {

    this.activatedRouter.params.forEach((params : Params) =>{

      let id = +params["id"];

      this.project = projects.find(x  => x.id == id);

    })

  }

  goBack(){

    this.router.navigate(['/proj'])

  }

}
