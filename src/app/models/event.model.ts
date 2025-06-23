import { MusicEventFormComponent } from "../components/music-event-form-component/music-event-form-component";
import { SportEventFormComponent } from "../components/sport-event-form-component/sport-event-form-component";

export interface BaseEvent {
  id: number;
  name: string;
  description: string;
  location: string;
  date: Date;
  type: EventType;
}

export enum EventType {
  Sport = 'Спорт',
  Music = 'Музыка'
}

export interface SportEvent extends BaseEvent {
  type: EventType.Sport;
  participantsCount: number;
}

export enum MusicGenre {
  Rock = 'Рок',
  Pop = 'Поп',
  HipHop = 'Хип-хоп',
  Jazz = 'Джаз',
  Classical = 'Классическая музыка',
  Country = 'Кантри',
  Dance = 'Танцевальная музыка',
  Other = 'Другое',
  None = 'Не выбрано'
}

export interface MusicEvent extends BaseEvent {
  type: EventType.Music;
  genre: MusicGenre;
}

export type Event = SportEvent | MusicEvent;

export type EventDialogMode = 'create' | 'edit';

export const EVENT_TYPE_LABELS: Record<EventType, string> = {
  [EventType.Sport]: 'Спортивное мероприятие',
  [EventType.Music]: 'Музыкальное мероприятие'
};

export const EVENT_COMPONENTS_MAP = {
  [EventType.Sport]: SportEventFormComponent,
  [EventType.Music]: MusicEventFormComponent
}