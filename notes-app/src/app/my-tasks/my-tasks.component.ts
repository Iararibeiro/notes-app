import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss']
})
export class MyTasksComponent implements OnInit, AfterViewInit {
  calendarView: boolean = true;
  date: string;

  dayHours = [];
  private days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  tasks = [];

  constructor(
    private projectService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.setDate();
    this.dayHours = Array(24).fill(0).map((x,i)=>(i));

    this.projectService.taskList$.subscribe(list => {
      console.log(list);
      if (list != null && list.length > 0) {
        this.tasks = list;
      }
    });
  }

  ngAfterViewInit() {
    this.setScreenPosition();
  }

  setScreenPosition() {
    let currentDate = new Date();
    let elementId = `#object-${currentDate.getHours()}`;
    const element = document.querySelector(elementId);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  /* Set the date under the greeting */
  setDate() {
    let currentDate = new Date();
    let dayOfWeek = this.days[currentDate.getDay()];
    this.date = `${dayOfWeek} ${currentDate.getDate()}`;
  }

  setTimeFrame() {

  }
}
