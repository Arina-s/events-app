import { Component, inject, model } from '@angular/core';
import { EVENT_TYPE_LABELS, EventType } from '../../models/event.model';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from '@angular/cdk/dialog';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddEditEventDialogComponent } from '../add-edit-event-dialog-component/add-edit-event-dialog-component';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-choose-type-event-dialog-component',
  imports: [SelectModule, FormsModule, DialogModule, ButtonModule],
  templateUrl: './choose-type-event-dialog-component.html',
  styleUrl: './choose-type-event-dialog-component.scss'
})
export class ChooseTypeEventDialogComponent {

  dialog = inject(MatDialog)
  selectedEventType = model<EventType | null>(null);
  eventTypeOptions = Object.entries(EVENT_TYPE_LABELS).map(([key, label]) => ({ label, value: key as EventType }));

  constructor(public dialogRef: MatDialogRef<ChooseTypeEventDialogComponent>) { }

  closeDialog() {
    this.dialogRef.close();
  }

  openAddEventDialog() {
    this.closeDialog();
    this.dialog.open(AddEditEventDialogComponent,
      {
        data: { mode: 'create', event: { type: this.selectedEventType() } }
      }
    );
  }

}
