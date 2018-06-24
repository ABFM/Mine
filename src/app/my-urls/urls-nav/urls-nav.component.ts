import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-urls-nav',
  templateUrl: './urls-nav.component.html',
  styleUrls: ['./urls-nav.component.css']
})
export class UrlsNavComponent implements OnInit {
  activeTab = 'Articles';

  constructor() { }

  ngOnInit() {
  }

}
