import { Component, inject, Signal } from '@angular/core';
import { EventDataService } from '../../services/event-data-service';
import { DatePipe, NgIf } from '@angular/common';
import { EVENT_TYPE_LABELS, EventType } from '../../models/event.model';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ChooseTypeEventDialogComponent } from '../choose-type-event-dialog-component/choose-type-event-dialog-component';
import { DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog-component/delete-confirmation-dialog-component';
import { AddEditEventDialogComponent } from '../add-edit-event-dialog-component/add-edit-event-dialog-component';

@Component({
  selector: 'app-events-list',
  imports: [DatePipe, ButtonModule, TableModule, PanelModule, DialogModule],
  templateUrl: './events-list.html',
  styleUrl: './events-list.scss'
})
export class EventsList {

  private eventDataService = inject(EventDataService);
  private dialog = inject(MatDialog);

  EventType = EventType;
  eventList = this.eventDataService.getAllEvents();

  openCreateEventDialog() {
    this.dialog.open(ChooseTypeEventDialogComponent);
  }

  getEventTypeLabel(type: string): string {
    return EVENT_TYPE_LABELS[type as EventType];
  }

  getEventType(type: string): EventType {
    return type as EventType;
  }

  openDeleteEventDialog(eventId: number) {
    this.dialog.open(DeleteConfirmationDialogComponent, {
      data: { eventId }
    });
  }

  openEditEventDialog(eventId: number) {
    this.dialog.open(AddEditEventDialogComponent, {
      data: { mode: 'edit', event: { id: eventId } }
    });
  }

}
