import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api/api.service";
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {Event} from "../../api/api.domain";

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {

  events0?: Event[]

  constructor(private readonly apiService: ApiService, private readonly activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(switchMap(params => this.apiService.fetchEventsByTypeId(params['id']))).subscribe(events => this.events0 = events);
  }

  get events() {
    return this.events0 ?? [];
  }

  trackBy(index: number, {id}: Event): string {
    return id;
  }
}
