import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
/* Types */
import { Task, Project } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[];
  private tasks: Task[];

  private _projectList = new BehaviorSubject<Project[]>(undefined);
  private _taskList = new BehaviorSubject<Task[]>(undefined);

  public projectList$ = this._projectList.asObservable();
  public taskList$ = this._taskList.asObservable();

  constructor() {
    this.projects = [];
    this.tasks = [];
  }

  /* get all the current projects */
  getAll() {
    this._taskList.next(this.tasks);
    this._projectList.next(this.projects);
  }

  /* add a new project to the list */
  addProject(newProject: Project) {
    this.projects.push(newProject);
    this._projectList.next(this.projects);
  }

  /* Add a new task with or without a project */
  addTask(newTask: Task, projectName: string = null) {
    if (!projectName) {
      this.tasks.push(newTask);
      this._taskList.next(this.tasks);
    }

    this.projects = this.projects.map(project => {
      if (project.title === projectName) {
        project.tasks.push(newTask);
      }
      return project;
    });
    this._projectList.next(this.projects);
  }
}
