import { Component, OnInit, Input } from '@angular/core';
import { cardType, Project } from '../../types';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit{
  @Input() size: string;
  @Input() project: Project;

  progress: number = 40;

  constructor() { }

  ngOnInit() {
    this.getProjectProgress();
  }

  getProjectProgress() {
    if (this.project.tasks.length > 0) {
      let completeTasks = this.project.tasks.filter(task => task.status === 'complete');
      this.progress = (completeTasks.length / (this.project.tasks.length)) * 100;
    }
    
    console.log(this.progress);
  }

}
