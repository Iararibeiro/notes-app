import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { EmptySectionComponent } from './utils/empty-section/empty-section.component';
import { NewTaskComponent } from './modals/new-task/new-task.component';
import { NewProjectComponent } from './modals/new-project/new-project.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Angular material */
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyTasksComponent,
    MyProjectsComponent,
    EmptySectionComponent,
    NewTaskComponent,
    NewProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
