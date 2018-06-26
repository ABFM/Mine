import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

  model = {};
  constructor(
    private route: ActivatedRoute,
    private data: DataService
  ) { }

  ngOnInit() {
  this.getFriendInfo();
  }

  getIdFromCurrentRoute() {
    return this.route.snapshot.params['id'];
  }

  getFriendInfo() {
    const id = this.getIdFromCurrentRoute();
    this.model = this.data.getFriendById(id);
  }
}
