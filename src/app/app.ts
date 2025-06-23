import { Component } from '@angular/core';
import { EventsList } from "./components/events-list/events-list";
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-root',
  imports: [EventsList, ToolbarModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
