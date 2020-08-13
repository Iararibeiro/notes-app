import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
/* Types */
import { Task, Project } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[];

  private _projectList = new Subject();

  public projectList$ = this._projectList.asObservable();

  constructor() {
    this.projects = [];
  }

  getAll(): Project[] {
    return this.projectList$;
  }

  addProject(newProject: Project) {
    this.projects.push(newProject);
    this._projectList.next(this.projects);
  }
}
