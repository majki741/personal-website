import { Component, OnInit } from '@angular/core';
import * as globals from '../../../global'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  test = globals.isDarkMode
  constructor() { }

  ngOnInit(): void {
  }

}
