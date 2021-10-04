export interface Event {
  id: string;
  eventTypeId: string;
  name: string;
  description: string;
  maxParticipants: number;
  startTime: string;
  freeSpots: number
}

export interface EventType {
  id: string;
  name: string;
  registrationStartTime: string;
  registrationEndTime: string;
}

export interface EventParticipation {
  id: string;
  eventId: string;
  surname: string;
  givenName: string;
  mail: string;
}
