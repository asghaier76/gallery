import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service';
import { ActivatedRoute } from '@angular/router';
import {Router, NavigationExtras} from "@angular/router";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  photos: any = []; // Variable used to hold list of photos in an album
  title: any;
  constructor(private _api: ApiService, private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.title = this._activatedRoute.snapshot.paramMap.get('title');
    let albumId = this._activatedRoute.snapshot.paramMap.get('id'); // Album Id passed as a param from previous page
    this._api.getPhotos()
    .then(res => {
      let result: any = [];
      result = res;
      // Iterating through list of photos retrieved to filter for a specific album given the albumId
      for(let i = 0; i < result.length; i++) {
        if (result[i].albumId == albumId) {
            this.photos.push(result[i]);
        }
      }
    }, (err) => {
        alert("Error! Not able to retreive user's albums.");
    });
  }

  // Navigate to Photo Display passing photo as a JSON object
  public viewPhoto(photo) {
    let navigationExtras: NavigationExtras = {
        queryParams: photo
    };
    this._router.navigate(["photo"], navigationExtras);
}

}
