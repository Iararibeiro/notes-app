import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
/* Angular material imports */
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
/* types */
import { Project } from '../../types';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent {
  anyChanges: boolean = false;

  projectForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(
    public dialogRef: MatDialogRef<NewProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Project
  ) { }

  cancel(): void {
    if (!this.anyChanges) {
      this.dialogRef.close();
    }
  }

  submit(): void {
    console.log(this.projectForm);
  }

}
