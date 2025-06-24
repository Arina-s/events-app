import { Component, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Event, EVENT_COMPONENTS_MAP, EventDialogMode } from '../../models/event.model';
import { NgComponentOutlet } from '@angular/common';
import { EventDataService } from '../../services/event-data-service';

@Component({
  selector: 'app-add-edit-event-dialog-component',
  imports: [NgComponentOutlet],
  templateUrl: './add-edit-event-dialog-component.html',
  styleUrl: './add-edit-event-dialog-component.scss'
})
export class AddEditEventDialogComponent implements OnInit{

  private data = inject(MAT_DIALOG_DATA) as { mode: EventDialogMode; event?: Event };
  private eventDataService = inject(EventDataService);
  private readonly mode = this.data.mode;
  private event? : Event;
  componentsInputs = {};

  constructor(public dialogRef: MatDialogRef<AddEditEventDialogComponent>) { }

  ngOnInit(): void {
    switch (this.mode) {
      case 'create': {
        this.event = this.data.event;
        break;
      }
      case 'edit': {
        this.event = this.eventDataService.getEventById(this.data.event!.id)();
        break;
      }
    }

    this.componentsInputs = {
      mode: this.mode,
      event: this.event,
      dialogRef: this.dialogRef
    };
  }

  getComponentToRender() {
    return EVENT_COMPONENTS_MAP[this.event?.type!] ?? null;
  }

}
