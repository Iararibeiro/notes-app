import { Component, OnInit, Input } from '@angular/core';
import { noticeType } from '../../types';

@Component({
  selector: 'app-empty-section',
  templateUrl: './empty-section.component.html',
  styleUrls: ['./empty-section.component.scss']
})
export class EmptySectionComponent implements OnInit {
  @Input() typeNotice: string;
  @Input() size: string;

  buttonText = 'Create';
  buttonClass = 'btn-green';
  label = '';

  constructor() { }

  ngOnInit(): void {
    if (this.typeNotice === 'project') {
      this.label = 'projects';
      this.buttonText = "Create a new project";
    } else {
      this.label = "tasks";
      this.buttonText = "Create a new task";
      this.buttonClass = 'btn-pink';
    }
  }

  getSmallButtonClass() {
    if (this.typeNotice === 'project') {
      return "btn-green sm";
    }
    return "btn-pink sm";
  }
}
