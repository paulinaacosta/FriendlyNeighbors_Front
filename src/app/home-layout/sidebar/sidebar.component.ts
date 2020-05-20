import {Component, Input, OnInit} from '@angular/core';
import {$} from "protractor";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() {
    console.log('Sidebar constructor called');
  }

  @Input() posts: string;
  @Input() favors: string;
  @Input() events: string;
  @Input() neigh: string;
  @Input() services: string;

  ngOnInit() {
  }
}
