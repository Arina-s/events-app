import { Event } from '../models/event.model';
import { EventType } from '../models/event.model';
import { MusicGenre } from '../models/event.model';

export const MOCK_EVENTS: Event[] = [
  {
    id: 1,
    name: 'Весенний марафон',
    description: 'Ежегодный городской спортивный забег',
    location: 'Парк Горького',
    date: new Date('2025-05-10'),
    type: EventType.Sport,
    participantsCount: 150
  },
  {
    id: 2,
    name: 'Рок-концерт группы "Thunder"',
    description: 'Концерт на открытой сцене',
    location: 'Стадион "Арена"',
    date: new Date('2025-06-20'),
    type: EventType.Music,
    genre: MusicGenre.Rock
  },
  {
    id: 3,
    name: 'Турнир по футболу',
    description: 'Местное первенство среди любителей',
    location: 'Спортивный комплекс "Олимп"',
    date: new Date('2025-07-05'),
    type: EventType.Sport,
    participantsCount: 22
  },
  {
    id: 4,
    name: 'Джазовый фестиваль',
    description: 'Фестиваль джазовой музыки с участием лучших коллективов',
    location: 'Культурный центр',
    date: new Date('2025-08-15'),
    type: EventType.Music,
    genre: MusicGenre.Jazz
  },
  {
    id: 5,
    name: 'Фитнес-занятие на открытом воздухе',
    description: 'Групповое занятие по аэробике',
    location: 'Площадь у парка',
    date: new Date('2025-09-01'),
    type: EventType.Sport,
    participantsCount: 30
  }
];
