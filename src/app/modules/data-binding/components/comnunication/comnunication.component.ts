import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comnunication',
  templateUrl: './comnunication.component.html',
  styleUrls: ['./comnunication.component.css']
})
export class ComnunicationComponent implements OnInit {

  username: string = "Ankit Patel";

  child1Data: string = "";

  child2Data: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  notifyParent(data: string) {
    this.child1Data = data;
  }

  reciveData(data: string) {
    this.child2Data = data;
  }

}
