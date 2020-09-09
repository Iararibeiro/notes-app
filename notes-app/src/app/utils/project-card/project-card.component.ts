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

  constructor() { }

  ngOnInit() {
    console.log(this.size);
  }

}
