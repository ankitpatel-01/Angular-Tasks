import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-page-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.css']
})
export class PageViewComponent implements OnInit {


  @Output() title = "Currency & Product Tables"
  constructor() { }

  ngOnInit(): void {
  }

}
