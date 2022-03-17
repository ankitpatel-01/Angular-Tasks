import { Component, OnInit } from '@angular/core';
import { InternsService } from './interns.service';
import { Intern } from './mock/intern.mock';

@Component({
  selector: 'app-subject-crud',
  templateUrl: './subject-crud.component.html',
  styleUrls: ['./subject-crud.component.scss']
})
export class SubjectCrudComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }
}
