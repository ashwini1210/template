import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  items=["Report","Analytics","Export" ,"Nav-bar"];
  data=["nav item","nav item-again","one more nav","another nav item","more navigation"];

  constructor() {
  

   }

  ngOnInit() {
  }

}

