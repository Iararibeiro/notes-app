import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss']
})
export class MyTasksComponent implements OnInit {
  calendarView: boolean = true;
  date: string;

  private months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  constructor() { }

  ngOnInit(): void {
    this.setDate();
  }

  /* Set the date under the greeting */
  setDate() {
    let currentDate = new Date();
    let month = this.months[currentDate.getMonth()];
    this.date = `${currentDate.getDate()} ${month} ${currentDate.getFullYear()}`;
  }
}
