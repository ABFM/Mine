import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
status = {
  currentTab: 'Articles'
};
  constructor() { }

  setCurrentTab(status: string) {
    this.status.currentTab = status;
    console.log('current tab is: ', this.status.currentTab);
  }
  getCurrentTab() {
    return this.status.currentTab;
  }
}
