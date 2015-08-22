/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';

class FriendsService {
  names: Array<string>;
  constructor() {
    this.names = ["Alice", "Aarav", "Martín", "Shannon", "Ariana", "Kai"];
  }
}

@Component({
  appInjector: [FriendsService],
  selector: 'display'
})

@View({
  directives: [NgFor, NgIf],
  template: `
  <p>My name: {{ myName }}</p>
  <p>Friends:</p>
  <ul>
    <li *ng-for="#name of names">
      {{ name }}
    </li>
  </ul>
  <p *ng-if="names.length > 3">You have many friends!</p>
  `
})

class DisplayComponent {
  private  names: string[];
  private  myName: string;
  private  friendsService: any;

  constructor(friendsService: FriendsService) {
    this.friendsService = friendsService;
    this.init();
  }
  init() {
    this.names = this.friendsService.names;
    this.myName = 'Andranik';
  }
}

bootstrap(DisplayComponent);
