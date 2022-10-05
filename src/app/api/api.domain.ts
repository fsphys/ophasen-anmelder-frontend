export interface Event {
  id: string;
  eventTypeId: string;
  name: string;
  description: string;
  maxParticipants: number;
  startTime: string;
  freeSpots: number;
  needsBirthInformation: boolean;
}

export interface EventType {
  id: string;
  name: string;
  registrationStartTime: string;
  registrationEndTime: string;
  eventDrawId?: string;
}

export interface EventDraw {
  id: string;
  drawTime: string;
  drawn: boolean;
}

export interface EventParticipation {
  id: string;
  eventId: string;
  surname: string;
  givenName: string;
  mail: string;
  BirthDate: string;
  BirthPlace: string;
}
