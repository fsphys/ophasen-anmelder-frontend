import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api/api.service";
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs/operators";
import { Event, EventDraw, EventType } from "../../api/api.domain";
import { forkJoin } from 'rxjs/internal/observable/forkJoin';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {

  events0?: Event[]
  eventType0?: EventType
  eventDraw0?: EventDraw

  loading = true

  constructor(private readonly apiService: ApiService, private readonly activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(switchMap(params => {
      return forkJoin([this.apiService.fetchEventsByTypeId(params['id']), this.apiService.fetchEventType(params['id'])])
    })).subscribe(([events, eventType]) => {
      this.events0 = events.sort((a, b) => a.name.localeCompare(b.name));
      this.eventType0 = eventType;
      this.eventType0.registrationEndTime = new Date(this.eventType0.registrationEndTime).toLocaleString();
      if (eventType.eventDrawId != null) {
        this.apiService.fetchEventDraw(eventType.eventDrawId).subscribe(eventDraw => {
          this.eventDraw0 = eventDraw;
          this.eventDraw0.drawTime = new Date(this.eventDraw0.drawTime).toLocaleString();
        })
      }
      this.loading = false;
    });
  }

  get events() {
    return this.events0 ?? [];
  }

  get eventType() {
    return this.eventType0 ?? null;
  }

  get eventDraw() {
    return this.eventDraw0 ?? null;
  }

  trackBy(index: number, {id}: Event): string {
    return id;
  }

  back() {

  }

}
