import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from '../../api/api.service';
import {EventType} from "../../api/api.domain";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  error?: string
  success?: string

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly apiService: ApiService) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.error = params.error;
      this.success = params.success;
    });
  }

  get types() {
    return this.apiService.types;
  }

  trackBy(index: number, {id}: EventType): string {
    return id;
  }
}
