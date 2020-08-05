import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
/* Angular material imports */
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
/* Types */
import { Task } from '../../types';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent {
  anyChanges: boolean = false;

  taskForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    project: new FormControl(''),
    startTime: new FormControl(''),
    endTime: new FormControl('')
  });

  constructor(
    public dialogRef: MatDialogRef<NewTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task
  ) { }

  cancel(): void {
    this.dialogRef.close();
  }

  submit() {
    console.log(this.taskForm);
  }

}
