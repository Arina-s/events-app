import { OnInit, inject, Input, Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventDataService } from '../../services/event-data-service';
import { Event, EventDialogMode } from '../../models/event.model';
import { MatDialogRef } from '@angular/material/dialog';
import { AddEditEventDialogComponent } from '../add-edit-event-dialog-component/add-edit-event-dialog-component';

@Component({
  selector: 'app-base-event-form',
  template: '',
})
export abstract class BaseEventFormComponent implements OnInit{

  @Input() mode!: EventDialogMode;
  @Input() event!: Event;
  @Input() dialogRef!: MatDialogRef<AddEditEventDialogComponent>;

  eventDataService = inject(EventDataService);
  formBuilder = inject(FormBuilder);

  eventForm!: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.eventForm = this.formBuilder.group({
      id: this.formBuilder.control(this.event?.id || 0),
      name: this.formBuilder.control(this.event?.name || '', [Validators.required, Validators.minLength(3)]),
      description: this.formBuilder.control(this.event?.description || ''),
      location: this.formBuilder.control(this.event?.location || ''),
      date: this.formBuilder.control(this.event?.date || new Date())
    });
  }

  saveForm() {
    switch (this.mode) {
      case 'create': {
        this.eventDataService.addEvent(this.eventForm.value);
        break;
      }
      case 'edit': {
        this.eventDataService.updateEvent(this.eventForm.value);
        break;
      }
    }
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
