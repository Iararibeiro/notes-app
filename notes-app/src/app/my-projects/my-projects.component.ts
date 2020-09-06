import { Component, OnInit } from '@angular/core';
/* Services */
import { ProjectsService } from '../services/projects.service';
/* Types */
import { Project } from '../types';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(
    private projectService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.projectService.projectList$.subscribe(list => {
      if (list != null && list.length > 0) {
        this.projects = list;
      }
    });

    this.projectService.getAll();
  }

  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }

}
