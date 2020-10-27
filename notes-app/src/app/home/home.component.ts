import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
/* Compoenents */
import { NewProjectComponent } from '../modals/new-project/new-project.component';
import { NewTaskComponent } from '../modals/new-task/new-task.component';
/* Services */
import { ProjectsService } from '../services/projects.service';
/* Types */
import { Task, Project, status } from '../types';

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
    private projectService: ProjectsService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.setGreeting();
    this.setDate();

    this.projectService.projectList$.subscribe(list => {
      console.log(list);
      if (list != null && list.length > 0) {
        this.displayProjects = true;
        this.projects = list;
      }
    });

    this.projectService.taskList$.subscribe(tasks => {
      if (tasks != null && tasks.length > 0) {
        this.displayTasks = true;
        this.tasks = tasks.filter(task => task.status !== status.Done);
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
    const dialogNewProjectRef = this.dialog.open(NewProjectComponent, { width: '350px' });
  }

  /* Open create a new task dialog */
  createTask() {
    const dialogNewTaskRef = this.dialog.open(NewTaskComponent, { width: '350px' });
  }

  /**Update a task status */
  updateTask(event) {
    this.tasks = this.tasks.filter(task => task.title !== event.title);
    
    if (this.tasks.length === 0) {
      this.displayTasks = false;
    }
  }
}
