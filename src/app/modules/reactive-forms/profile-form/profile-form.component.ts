import { Component, OnInit } from '@angular/core';
import { Department } from './department.model';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  departments:Department[] = [
    {
      name: "FrontEnd"
    },
    {
      name: "Database"
    },
    {
      name: ".Net"
    },
    {
      name: "QA"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
