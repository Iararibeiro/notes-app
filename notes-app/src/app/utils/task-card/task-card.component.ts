import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task, status } from 'src/app/types';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {
  @Input() size: string;
  @Input() task: Task;
  @Output() status: EventEmitter<Task> = new EventEmitter();

  start: string;
  end: string;

  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.formatStart();
    this.formatEnd(); 
    
    if (!this.task.status) {
      this.task.status = status.NotStarted;
    }

    if (this.start === this.end) {

    }
  }

  changeStatus(newStatus: string){
    if (newStatus == status.Done) {
      this.task.status = status.Done;
    } else {
      this.task.status = status.WIP;
    } 
    this.projectService.updateTask(this.task);
    this.status.emit(this.task);
  }

  private formatStart() {
      let startDate = new Date(this.task.startTime);
      let endDate = new Date(this.task.endTime);
      console.log(endDate.getTime() - startDate.getTime());
  }

  private formatEnd() {

  }

}
