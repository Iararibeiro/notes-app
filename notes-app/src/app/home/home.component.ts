import { Component, OnInit } from '@angular/core';
/* Services */
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  greeting: string;
  date: string;

  private months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  displayTasks = false;
  displayProjects = false;

  projects$;

  constructor(
    private projectService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.setGreeting();
    this.setDate();

    this.projects$ = this.projectService.projectList$.subscribe((list) => {
      if (list != null && list.length > 0) this.displayProjects = true;
      console.log(list);
    });
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
}
