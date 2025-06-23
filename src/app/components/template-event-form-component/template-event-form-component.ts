import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { NgTemplateOutlet } from '@angular/common';
import { EVENT_TYPE_LABELS, EventDialogMode, EventType } from '../../models/event.model';

@Component({
  selector: 'app-template-event-form-component',
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    TextareaModule,
    CalendarModule,
    ButtonModule,
    NgTemplateOutlet
  ],
  templateUrl: './template-event-form-component.html',
  styleUrl: './template-event-form-component.scss'
})
export class TemplateEventFormComponent {

  @ContentChild(TemplateRef) contentTemplate!: TemplateRef<any>;

  @Input() form!: FormGroup;
  @Input() mode!: EventDialogMode;
  @Output() formChange = new EventEmitter<FormGroup>();
  @Output() closeDialog = new EventEmitter<void>();

  get label(): string {
    return EVENT_TYPE_LABELS[this.form.get('type')?.value as EventType] ?? '';
  }

  get actionButtonLabel(): string {
    switch (this.mode) {
      case 'create': return 'Создать';
      case 'edit': return 'Сохранить';
    }
  }

  emitCloseDialog() {
    this.closeDialog.emit();
  }

  saveForm() {
    this.formChange.emit(this.form);
  }

}
