import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { noticeType } from '../../types';

import { NewProjectComponent } from '../../modals/new-project/new-project.component';
import { NewTaskComponent } from '../../modals/new-task/new-task.component';

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

  constructor(public dialog: MatDialog) { }

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

  /**
   * Get the class of the small button, buttons are different depending if it
   * is a project or a class
   */
  getSmallButtonClass() {
    if (this.typeNotice === 'project') {
      return "btn-green icon";
    }
    return "btn-pink icon";
  }

  /**
   * Open the modal when the user clicks in the component button
   */
  onClick() {
    if (this.typeNotice === 'project') {
      const dialogNewProjectRef = this.dialog.open(NewProjectComponent, { width: '350px' });
    } else {
      const dialogNewTaskRef = this.dialog.open(NewTaskComponent, { width: '350px' });
    }
  }
}
