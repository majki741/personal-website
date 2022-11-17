import { Component, OnInit, Input } from '@angular/core';
import * as globals from '../../../global'

@Component({
  selector: 'app-portfolio-thumbnail',
  templateUrl: './portfolio-thumbnail.component.html',
  styleUrls: ['./portfolio-thumbnail.component.scss']
})
export class PortfolioThumbnailComponent implements OnInit {
  isDarkMode = globals.isDarkMode;
  @Input() portfolio:any;
  constructor() { }

  ngOnInit(): void {
  }

}
