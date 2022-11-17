import { Component, OnInit } from '@angular/core';
import * as globals from '../../global'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isDarkMode = globals.isDarkMode;
  turnDarkMode = globals.turnDarkMode
  
  constructor() { }

  ngOnInit(): void {
  }

  testClick(): void {
    console.log("I clicked on " + location.hostname)
  }

}
