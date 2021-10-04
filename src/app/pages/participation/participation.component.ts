import {Component, OnInit} from '@angular/core';
import {catchError, switchMap} from "rxjs/operators";
import {ApiService} from "../../api/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Event, EventParticipation} from "../../api/api.domain";
import {throwError} from "rxjs";

@Component({
  selector: 'app-participation',
  templateUrl: './participation.component.html',
  styleUrls: ['./participation.component.scss']
})
export class ParticipationComponent implements OnInit {

  event?: Event
  eventParticipation?: EventParticipation
  success?: string

  constructor(private readonly apiService: ApiService,
              private readonly activatedRoute: ActivatedRoute,
              private readonly router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(switchMap(
      params => this.apiService.fetchEventParticipation(params['id'])))
      .pipe(switchMap(eventParticipation => {
          this.eventParticipation = eventParticipation;
          return this.apiService.fetchEvent(eventParticipation.eventId)
        }), catchError(error => throwError(this.router.navigate(['/'], {queryParams: {error: error.error.message}})))
      ).subscribe(event => this.event = event);
    this.activatedRoute.queryParams.subscribe(params => this.success = params.success);
  }

  unregister() {
    this.activatedRoute.params.pipe(
      switchMap(params => this.apiService.deleteParticipation(params['id'])),
      catchError(error => throwError(this.router.navigate(['/'], {queryParams: {error: error.error.message}})))
    ).subscribe(value => this.router.navigate(['/'], {queryParams: {success: 'Deine Abmeldung war erfolgreich.'}}));
  }
}
