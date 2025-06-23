import { Component } from '@angular/core';
import { EventType, MusicGenre } from '../../models/event.model';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplateEventFormComponent } from '../template-event-form-component/template-event-form-component';
import { BaseEventFormComponent } from '../base-event-form-component/base-event-form-component';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-music-event-form-component',
  imports: [TemplateEventFormComponent, ReactiveFormsModule, SelectModule],
  templateUrl: './music-event-form-component.html',
  styleUrl: './music-event-form-component.scss'
})
export class MusicEventFormComponent extends BaseEventFormComponent {

  MusicGenre = MusicGenre;
  musicGenreOptions = Object.entries(MusicGenre).map(([_, value]) => ({
    label: value,
    value
  }));

  override buildForm(): void {
    super.buildForm();
    this.eventForm.addControl('type', this.formBuilder.control(EventType.Music));
    this.eventForm.addControl('genre', this.formBuilder.control(this.event?.type === EventType.Music ? this.event.genre : null));
  }

}
