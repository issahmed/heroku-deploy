import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass'],

})
export class CalendarComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
