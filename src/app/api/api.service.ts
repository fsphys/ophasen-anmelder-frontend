import {Injectable} from '@angular/core';
import { Event, EventDraw, EventParticipation, EventType } from "./api.domain";
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
      this.types0.forEach(type => {
        type.registrationEndTime = new Date(type.registrationEndTime).toLocaleString();
      })
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

  fetchEventType(eventTypeId: string): Observable<EventType> {
    return this.http.get<EventType>(
      `${environment.apiUrl}/event/type/${eventTypeId}`
    );
  }

  fetchEventDraw(eventDrawId: string): Observable<EventDraw> {
    return this.http.get<EventDraw>(
      `${environment.apiUrl}/event/draw/${eventDrawId}`
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

  fetchDrawEventParticipation(eventId: string): Observable<EventParticipation> {
    return this.http.get<EventParticipation>(
      `${environment.apiUrl}/event/draw/participation/${eventId}`
    );
  }

  joinEvent(
    eventId: string,
    surname: string,
    givenName: string,
    mail: string,
    birthDate: number | null,
    birthPlace: string
  ): Observable<EventParticipation> {
    return this.http.post<EventParticipation>(
      `${environment.apiUrl}/event/participation`,
      {eventId, surname, givenName, mail, birthDate, birthPlace}
    );
  }

  joinDraw(
    eventId: string,
    surname: string,
    givenName: string,
    mail: string,
    birthDate: number | null,
    birthPlace: string
  ): Observable<EventParticipation> {
    return this.http.post<EventParticipation>(
      `${environment.apiUrl}/event/draw/participation`,
      {eventId, surname, givenName, mail, birthDate, birthPlace}
    );
  }

  deleteParticipation(eventParticipationId: string): Observable<void> {
    return this.http.delete<void>(
      `${environment.apiUrl}/event/participation/${eventParticipationId}`
    );
  }

  deleteDraw(eventDrawParticipationId: string): Observable<void> {
    return this.http.delete<void>(
      `${environment.apiUrl}/event/draw/participation/${eventDrawParticipationId}`
    );
  }
}
