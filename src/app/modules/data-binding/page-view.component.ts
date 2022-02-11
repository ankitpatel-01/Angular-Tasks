import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.css']
})
export class PageViewComponent implements OnInit {

  public title:string = "Databinding & Component Comunication"
  constructor() { }

  ngOnInit(): void {
  }

}
