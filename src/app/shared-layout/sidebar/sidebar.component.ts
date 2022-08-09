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
  isMenuPartners: boolean = false;
  isMenuSecretary: boolean=false ;



  toggleMenuUsers(): void {
    this.isMenuUsers = !this.isMenuUsers;
  }
  clickedOutsideUsers(): void {
    this.isMenuUsers = false;
  }

  toggleMenuTraining(): void {
    this.isMenuTraining = !this.isMenuTraining;
  }
  clickedOutsideTraining(): void {
    this.isMenuTraining = false;
  }

  toggleMenuPartners(): void {
    this.isMenuPartners = !this.isMenuPartners;
  }
  clickedOutsidePartners(): void {
    this.isMenuPartners = false;
  }

  toggleMenuSecretary(): void {
    this.isMenuSecretary = !this.isMenuSecretary;
  }
  clickedOutsideSecretary(): void {
    this.isMenuSecretary = false;
  }

    





}
