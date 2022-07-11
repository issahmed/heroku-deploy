import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
  classList: any;
  nextElementSibling: any;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  isMenuUsers: boolean = false;
  isMenuTraining: boolean = false;


  toggleMenuUsers(): void {
    this.isMenuUsers = !this.isMenuUsers;
  }
  toggleMenuTraining(): void {
    this.isMenuTraining = !this.isMenuTraining;
  }

  clickedOutsideUsers(): void {
    this.isMenuUsers = false;
  }
  clickedOutsideTraining(): void {
    this.isMenuTraining = false;
  }

    





}
