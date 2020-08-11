import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
/* Types */
import { Task, Project } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[];

  private _projectList: BehaviorSubject<Project[]> = new BehaviorSubject(null);

  public projectList$ = this._projectList.asObservable();

  constructor() {
    this.projects = [];
  }

  getAll(): Project[] {
    return this.projects;
  }

  addProject(newProject: Project) {
    this.projects.push(newProject);
    this._projectList.next(this.projects);
  }
}
