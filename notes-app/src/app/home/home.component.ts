import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
