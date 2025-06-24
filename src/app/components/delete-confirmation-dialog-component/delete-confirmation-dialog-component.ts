import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ButtonModule } from 'primeng/button';
import { EventDataService } from '../../services/event-data-service';

@Component({
  selector: 'app-delete-confirmation-dialog-component',
  imports: [ButtonModule],
  templateUrl: './delete-confirmation-dialog-component.html',
  styleUrl: './delete-confirmation-dialog-component.scss'
})
export class DeleteConfirmationDialogComponent {

  private eventDataService = inject(EventDataService);
  private dialogRef = inject(MatDialogRef<DeleteConfirmationDialogComponent>);
  private data = inject(MAT_DIALOG_DATA) as { eventId: number };

  confirmDelete() {
    this.eventDataService.deleteEvent(this.data.eventId);
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
