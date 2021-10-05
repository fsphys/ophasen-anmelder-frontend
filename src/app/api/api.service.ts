import {Injectable} from '@angular/core';
import {Event, EventParticipation, EventType} from './api.domain';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  types0?: EventType[]

  constructor(private readonly http: HttpClient) {
    this.fetchEventTypes0().subscribe(types => {
      this.types0 = types.filter(value => new Date(value.registrationEndTime) > new Date() && new Date(value.registrationStartTime) < new Date())
    })
  }

  get types() {
    return this.types0
  }

  private fetchEventTypes0(): Observable<EventType[]> {
    return this.http.get<EventType[]>(`${environment.apiUrl}/event/type`);
  }

  fetchEventsByTypeId(eventTypeId: string): Observable<Event[]> {
    return this.http.get<Event[]>(
      `${environment.apiUrl}/event/byType/${eventTypeId}`
    );
  }

  fetchEvent(eventId: string): Observable<Event> {
    return this.http.get<Event>(
      `${environment.apiUrl}/event/${eventId}`
    );
  }

  fetchEventParticipation(eventId: string): Observable<EventParticipation> {
    return this.http.get<EventParticipation>(
      `${environment.apiUrl}/event/participation/${eventId}`
    );
  }


  joinEvent(
    eventId: string,
    surname: string,
    givenName: string,
    mail: string
  ): Observable<EventParticipation> {
    return this.http.post<EventParticipation>(
      `${environment.apiUrl}/event/participation`,
      {eventId, surname, givenName, mail}
    );
  }

  deleteParticipation(eventParticipationId: string): Observable<void> {
    return this.http.delete<void>(
      `${environment.apiUrl}/event/participation/${eventParticipationId}`
    );
  }
}
