import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tasks', component: MyTasksComponent },
  { path: 'projects', component: MyProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
