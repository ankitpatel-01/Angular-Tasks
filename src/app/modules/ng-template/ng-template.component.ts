import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.scss']
})
export class NgTemplateComponent implements OnInit {

  selected:boolean = true;

  title = 'ngTemplateOutlet Example';

  @ViewChild('cardTemplate') cardTemplate: TemplateRef<HTMLElement>;
  @ViewChild('listTemplate') listTemplate: TemplateRef<HTMLElement>;
  @ViewChild('tableTemplate') tableTemplate: TemplateRef<HTMLElement>;

  mode = "card"

  items = [
    {
      header: 'Angular Tutorial',
      content: 'The Angular Tutorial for Beginners & Professionals'
    },
    {
      header: 'Typescript Tutorial',
      content: 'The Complete Guide to Typescript'
    },
    {
      header: 'Entity Framework Code Tutorial',
      content: 'Learn Everything about Entity Framework Core'
    },
  ];

  modeOptions = [
    { mode: "card" },
    { mode: "list" },
    { mode: "table" },
  ];

  get template() {

    if (this.mode == "list"){
      return this.listTemplate
    }else if(this.mode == "card"){
      return this.cardTemplate
    }else{
      return this.tableTemplate
    }
  }



  constructor() {
  }

  ngOnInit(): void {
  }

}
