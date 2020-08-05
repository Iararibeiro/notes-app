import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
/* Angular material imports */
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
/* Services */
import { ProjectsService } from '../../services/projects.service';
/* Types */
import { Task, Project } from '../../types';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  anyChanges: boolean = false;
  projectList: ReadonlyArray<Project>;

  taskForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    project: new FormControl(''),
    startTime: new FormControl(''),
    endTime: new FormControl('')
  });

  constructor(
    private projectService: ProjectsService,
    public dialogRef: MatDialogRef<NewTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task
  ) { }

  ngOnInit() {
    this.projectList = this.projectService.getAll();
  }

  cancel(): void {
    this.dialogRef.close();
  }

  submit() {
    console.log(this.taskForm);
  }

}
