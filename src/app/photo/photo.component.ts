import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  photo: any = {};

  constructor(private _api: ApiService, private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.queryParams.subscribe(params => {
      this.photo = params;
    });
  }

  ngOnInit() {
  }

}
