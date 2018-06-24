import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-urls',
  templateUrl: './my-urls.component.html',
  styleUrls: ['./my-urls.component.css']
})
export class MyUrlsComponent implements OnInit {
urls = [
  {
    owner: 'owner name',
    image: 'https://www.infosecurityeurope.com/images/155_162_delegate_large.png?h=162&type=3&w=155&q=100&v=636595767522260796',
    name: 'Card title',
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    body: 'https://web.facebook.com/?_rdc=1&_rdr'
  },
  {
    owner: 'owner name',
    image: 'https://www.infosecurityeurope.com/images/155_162_delegate_large.png?h=162&type=3&w=155&q=100&v=636595767522260796',
    name: 'Card title',
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    body: 'https://web.facebook.com/?_rdc=1&_rdr'
  },
  {
    owner: 'owner name',
    image: 'https://www.infosecurityeurope.com/images/155_162_delegate_large.png?h=162&type=3&w=155&q=100&v=636595767522260796',
    name: 'Card title',
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    body: 'https://web.facebook.com/?_rdc=1&_rdr'
  },
  {
    owner: 'owner name',
    image: 'https://www.infosecurityeurope.com/images/155_162_delegate_large.png?h=162&type=3&w=155&q=100&v=636595767522260796',
    name: 'Card title',
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    body: 'https://web.facebook.com/?_rdc=1&_rdr'
  }
];
  constructor() { }

  ngOnInit() {
  }

}
