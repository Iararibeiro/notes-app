import { Component, OnInit, Input } from '@angular/core';
import { Task, status } from 'src/app/types';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {
  @Input() size: string;
  @Input() task: Task;

  start: string;
  end: string;

  constructor() { }

  ngOnInit(): void {
    this.formatStart();
    this.formatEnd(); 
    
    if (!this.task.status) {
      this.task.status = status.NotStarted;
    }

    if (this.start === this.end) {

    }
  }

  private formatStart() {
      let startDate = new Date(this.task.startTime);
      let endDate = new Date(this.task.endTime);
      console.log(endDate.getTime() - startDate.getTime());
  }

  private formatEnd() {

  }

}
