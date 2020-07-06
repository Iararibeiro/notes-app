import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Notes App';
  private currentTab;

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      if(location.path() === '/tasks'){
        this.currentTab = 'tasks';
      } else if (location.path() === '/projects'){
        this.currentTab = 'projects';
      } else {
        this.currentTab = 'home';
      }
    });
  }

  ngOnInit(): void {
    this.currentTab = 'home';
  }

  isActive(tabName: string) {
    return tabName === this.currentTab;
  }

  goToTab(tabName: string) {
    this.currentTab = tabName;
  }
}
