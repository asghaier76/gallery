import { Component, OnInit } from '@angular/core';
import { ApiService} from './api.service';
import {UiService} from './ui.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gallery';
  users: any = [];
  darkModeActive: boolean;

  selectedUser: any= {};
  constructor(private _api: ApiService, private _ui: UiService, private _router : Router) {
    this.selectedUser.name = "Select User";
    
  }

  ngOnInit() {
    this._api.getAllUsers()
    .then(res => {
      this.users = res;
    }, (err) => {
        alert("Error! Not able to retreive users list.");
    });
  }

  changeUser(user) { 
    this.selectedUser = user;
  }



}
