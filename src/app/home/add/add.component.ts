import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  model = {};
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.model = form.value;
    console.log(this.model);
  }

}
