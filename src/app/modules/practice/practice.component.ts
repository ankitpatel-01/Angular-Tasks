import { Component, OnInit } from '@angular/core';
import { INTERNS } from './mock/intern.mock';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {

  public interns = INTERNS;

  constructor() { }

  ngOnInit(): void {

    let hasName;
    this.interns.every((intern)=>{
      if( intern.hasOwnProperty('name'))
      {
        hasName = true;
      }
    });

    console.log(hasName);
  }

}
