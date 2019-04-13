import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService} from '../api.service';
import { ActivatedRoute } from '@angular/router';
import {Router, NavigationEnd} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  albums = [];  // Variable used to hold list of albums for a user
  navigationSubscription; // class variable used to reload page upon switching user ccount

  constructor(private _api: ApiService, private _router: Router, private _activatedRoute: ActivatedRoute) {
    this.navigationSubscription = this._router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }

  ngOnInit() {
    this.albums = [];
    let userId = this._activatedRoute.snapshot.paramMap.get('id'); // User Id passed as a param from previous page
    this._api.getAlbums()
    .then(res => {
      let result: any = [];
      result = res;
      // Iterating through list of albums retrieved to filter for a specific user given the userId
      for(let i = 0; i < result.length; i++) {
        if (result[i].userId == userId) {
            this.albums.push(result[i]);
        }
      }
    }, (err) => {
        alert("Error! Not able to retreive user's albums.");
    });
  }

  ngOnDestroy() {
    // avoid memory leaks.
    if (this.navigationSubscription) {  
      this.navigationSubscription.unsubscribe();
   }
  }

}
