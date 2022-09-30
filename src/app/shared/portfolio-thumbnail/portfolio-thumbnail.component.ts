import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-thumbnail',
  templateUrl: './portfolio-thumbnail.component.html',
  styleUrls: ['./portfolio-thumbnail.component.scss']
})
export class PortfolioThumbnailComponent implements OnInit {

  @Input() portfolio:any;
  constructor() { }

  ngOnInit(): void {
  }

}
