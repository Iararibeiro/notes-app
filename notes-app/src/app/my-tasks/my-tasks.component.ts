import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss']
})
export class MyTasksComponent implements OnInit, AfterViewInit {
  calendarView: boolean = false;
  date: string;

  dayHours = [];
  private days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  tasks = [];

  constructor() { }

  ngOnInit(): void {
    this.setDate();
    this.dayHours = Array(24).fill(0).map((x,i)=>(i));
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
