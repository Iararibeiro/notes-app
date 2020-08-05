import { Injectable } from '@angular/core';
/* Types */
import { Task, Project } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[];

  constructor() {
    this.projects = [];
  }

  getAll(): Project[] {
    return this.projects;
  }

  addProject(newProject: Project) {
    this.projects.push(newProject);
  }
}
