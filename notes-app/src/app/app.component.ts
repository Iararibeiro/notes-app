import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Notes App';
  private currentTab;

  constructor() { }

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
