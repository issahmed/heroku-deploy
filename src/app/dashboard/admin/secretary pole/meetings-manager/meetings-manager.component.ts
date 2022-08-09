import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarOptions } from '@fullcalendar/angular';
import { ProspectPopUpComponent } from '../../partners manager/prospecting-list/prospect-pop-up/prospect-pop-up.component';
import { EventComponent } from './event/event.component';


@Component({
  selector: 'app-meetings-manager',
  templateUrl: './meetings-manager.component.html',
  styleUrls: ['./meetings-manager.component.sass']
})
export class MeetingsManagerComponent implements OnInit {
  events:any= [
    { title: 'Reunion bex ', date: '2022-08-07' , color:'#c61f1f' },
    { title: 'team building', date: '2022-08-15' ,color:'#c6aa1f' },
    { title: 'Reunion membres seniors', date: '2022-08-12' ,color:'#c65f22' },
    { title: 'Gpjr', date: '2022-08-02' ,color:'#c65f'  },
    { title: 'reunion membres', date: '2022-08-02' ,color:'#c65f' },
    { title: 'reunion bex', date: '2022-08-02' ,color:'#c65f' }


  ]

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    events : this.events,
    eventClick: this.handleEventClick.bind(this),
   // dateClick: this.onDateClick.bind(this),

  };
 
  handleEventClick(arg:any){
    
    console.log(arg)
    const task = arg.event._def.title;
    this.dialog.open(EventComponent, {
      width: "30%",
      data :[null,""]
    }) 
     }

  constructor(
    private dialog: MatDialog ,

  ) { }

  onDateClick(date: { dateStr: string; }) {
  //   console.log(date)
  // //  const task = arg.event._def.title;
  //   this.dialog.open(EventComponent, {
  //     width: "30%",
  //     data :[null,""]
  //   }) 
  }

  ngOnInit(): void {
  }
}

  // handleDateClick(arg:any){
  //   console.log(arg);
  // }
  // eventClick(info:any) {
  //   alert('Event: ' + info.event.title);
  //   alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
  //   alert('View: ' + info.view.type);

  //   // change the border color just for fun
  //   info.el.style.borderColor = 'red';
  // }


  
