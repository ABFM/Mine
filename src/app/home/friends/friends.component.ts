import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
friends = [
  {
    name: 'friend one',
    image: 'https://www.infosecurityeurope.com/images/155_162_delegate_large.png?h=162&type=3&w=155&q=100&v=636595767522260796',
    job: 'friend job'
  },
  {
    name: 'friend two',
    image: 'https://www.infosecurityeurope.com/images/155_162_delegate_large.png?h=162&type=3&w=155&q=100&v=636595767522260796',
    job: 'friend job'
  },
  {
    name: 'friend three',
    image: 'https://www.infosecurityeurope.com/images/155_162_delegate_large.png?h=162&type=3&w=155&q=100&v=636595767522260796',
    job: 'friend job'
  },
  {
    name: 'friend four',
    image: 'https://www.infosecurityeurope.com/images/155_162_delegate_large.png?h=162&type=3&w=155&q=100&v=636595767522260796',
    job: 'friend job'
  },
  {
    name: 'friend five',
    image: 'https://www.infosecurityeurope.com/images/155_162_delegate_large.png?h=162&type=3&w=155&q=100&v=636595767522260796',
    job: 'friend job'
  }
];
  constructor() { }

  ngOnInit() {
  }

}
