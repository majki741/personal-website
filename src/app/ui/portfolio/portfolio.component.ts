import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {



  portfolios = [
    {
      id: 1,
      name: 'Personal Website',
      repoUrl: 'https://github.com/majki741/personal-website',
      thumbnailImage: '../assets/images/portfolioThumbnails/personal-website.png',
      usedTechnologies: [
        {
          id: 1,
          name: 'Angular'
        },
        {
          id: 2,
          name: 'JavaScript'
        }
      ],
    },
    {
      id: 2,
      name: 'Test Website',
      repoUrl: 'https://github.com/majki741/personal-website',
      thumbnailImage: '../assets/images/portfolioThumbnails/personal-website.png',
      usedTechnologies: [
        {
          id: 1,
          name: 'Angular'
        },
        {
          id: 2,
          name: 'JavaScript'
        }
      ],
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
