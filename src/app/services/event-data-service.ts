import { computed, Injectable, Signal, signal } from '@angular/core';
import { Event } from '../models/event.model';
import { MOCK_EVENTS } from '../data/mock-events';

@Injectable({
  providedIn: 'root'
})
export class EventDataService {

  private readonly _events = signal<Event[]>(MOCK_EVENTS);
  private readonly _nextId = signal(MOCK_EVENTS.length + 1);

  getAllEvents(): Signal<Event[]> {
    return this._events;
  }

  addEvent(newEvent: Event): void {
    const eventWithId = { ...newEvent, id: this._nextId() };
    this._nextId.update(id => id + 1);
    this._events.update(list => [...list, eventWithId]);
  }

  updateEvent(updatedEvent: Event): void {
    this._events.update(list =>
      list.map(event => (event.id === updatedEvent.id ? updatedEvent : event))
    );
  }

  deleteEvent(id: number): void {
    this._events.update(list => list.filter(event => event.id !== id));
  }

  getEventById(id: number): Signal<Event | undefined> {
    return computed(() => this._events().find(e => e.id === id));
  }

}

