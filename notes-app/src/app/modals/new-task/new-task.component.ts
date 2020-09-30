import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
/* Angular material imports */
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  displaySuccess: boolean = false;
  projectList: ReadonlyArray<Project>;

  taskForm: FormGroup;

  constructor(
    private projectService: ProjectsService,
    public dialogRef: MatDialogRef<NewTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task
  ) { 
    this.taskForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      project: new FormControl(''),
      startTime: new FormControl(new Date()),
      endTime: new FormControl(new Date())
    });
  }

  ngOnInit() {
    this.projectService.projectList$.subscribe(list => {
      this.projectList = list;
    });

    this.projectService.getAll();
  }

  cancel(): void {
    this.dialogRef.close();
  }

  submit() {
    if (this.taskForm.valid) {
      this.displaySuccess = true;
      this.projectService.addTask(this.taskForm.value, this.taskForm.value.project);
    }
  }

}
