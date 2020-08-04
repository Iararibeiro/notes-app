import { Component, Inject } from '@angular/core';
/* Angular material imports */
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
/* types call */
import { Project } from '../../types';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent {
  anyChanges: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<NewProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Project
  ) { }

  cancel(): void {
    if (!this.anyChanges) {
      this.dialogRef.close();
    }
  }

}
