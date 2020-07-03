import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss']
})
export class MyTasksComponent implements OnInit {
  calendarView: boolean = false;
  date: string;

  dayHours = [];

  private days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  constructor() { }

  ngOnInit(): void {
    this.setDate();
    this.dayHours = Array(5).fill().map((x,i)=>(i + 7));
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
