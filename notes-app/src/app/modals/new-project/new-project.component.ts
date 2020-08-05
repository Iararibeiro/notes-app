import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
/* Angular material imports */
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
/* Services */
import { ProjectsService } from '../../services/projects.service';
/* types */
import { Project } from '../../types';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent {
  displaySuccess: boolean = false;

  projectForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(
    private projectService: ProjectsService,
    public dialogRef: MatDialogRef<NewProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Project
  ) { }

  cancel(): void {
    this.dialogRef.close();
  }

  submit(): void {
    if (this.projectForm.status === 'VALID') {
      this.projectService.addProject(this.projectForm.value);
      this.displaySuccess = true;
    }
  }

}
