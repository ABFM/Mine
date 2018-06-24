import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.css']
})
export class UrlComponent implements OnInit {

  model: {
    owner: string,
    image: string,
    name: string,
    description: string,
    body: string
  };
  constructor() { }

  ngOnInit() {
  }

}
