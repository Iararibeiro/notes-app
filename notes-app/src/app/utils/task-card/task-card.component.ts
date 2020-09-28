import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/types';

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
  }

  private formatStart() {
    console.log(this.task.startTime);
    if (this.task.startTime) {
      
    }
  }

  private formatEnd() {

  }

}
