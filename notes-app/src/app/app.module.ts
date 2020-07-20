import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { EmptySectionComponent } from './utils/empty-section/empty-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyTasksComponent,
    MyProjectsComponent,
    EmptySectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
