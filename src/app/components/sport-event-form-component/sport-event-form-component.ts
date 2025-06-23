import { Component } from '@angular/core';
import { EventType } from '../../models/event.model';
import { InputNumberModule } from 'primeng/inputnumber';
import { TemplateEventFormComponent } from '../template-event-form-component/template-event-form-component';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseEventFormComponent } from '../base-event-form-component/base-event-form-component';

@Component({
  selector: 'app-sport-event-form-component',
  imports: [InputNumberModule, TemplateEventFormComponent, ReactiveFormsModule],
  templateUrl: './sport-event-form-component.html',
  styleUrl: './sport-event-form-component.scss'
})
export class SportEventFormComponent extends BaseEventFormComponent {

  override buildForm(): void {
    super.buildForm();
    this.eventForm.addControl('type', this.formBuilder.control(EventType.Sport));
    this.eventForm.addControl('participantsCount', this.formBuilder.control(this.event?.type === EventType.Sport ? this.event.participantsCount : null));
  }

}
