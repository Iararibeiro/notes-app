import { Component, OnInit, OnDestroy } from '@angular/core';
/* Services */
import { ProjectsService } from '../services/projects.service';
/* Types */
import { Task, Project } from '../types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  greeting: string;
  date: string;

  private months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  displayTasks = false;
  displayProjects = false;

  projects: Project[] = [];
  tasks: Task[] = [];

  constructor(
    private projectService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.setGreeting();
    this.setDate();

    this.projectService.projectList$.subscribe(list => {
      if (list != null && list.length > 0) {
        this.displayProjects = true;
        this.projects = list;
      }
    });

    this.projectService.taskList$.subscribe(tasks => {
      if (tasks != null && tasks.length > 0) {
        this.displayTasks = true;
        this.tasks = tasks;
      }
    });

    this.projectService.getAll();
  }

  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }

  /* Set the greeting on the home page */
  setGreeting() {
    let currentDate = new Date();
    let hours = currentDate.getHours();

    if (hours < 12) {
      this.greeting = "Good morning!";
    } else if (hours > 12 && hours < 18) {
      this.greeting = "Good afternoon!";
    } else {
      this.greeting = "Good evening!";
    }
  }

  /* Set the date under the greeting */
  setDate() {
    let currentDate = new Date();
    let month = this.months[currentDate.getMonth()];
    this.date = `${currentDate.getDate()} ${month} ${currentDate.getFullYear()}`;
  }

  /* Open create a new project dialog */
  createProject() {

  }

  /*Open create a new task dialog*/
  createTask() {

  }
}
