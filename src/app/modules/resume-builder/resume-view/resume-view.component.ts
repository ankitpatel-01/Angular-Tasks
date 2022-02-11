import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';

import { ResumeService } from '../service/resume.service';

@Component({
  selector: 'app-resume-view',
  templateUrl: './resume-view.component.html',
  styleUrls: ['./resume-view.component.css']
})
export class ResumeViewComponent implements OnInit {

  public user: User = {} as User

  constructor(private service: ResumeService) {

  }

  ngOnInit(): void {
    this.service.getUserData().subscribe((data) => {
      this.user = data
    })
  }

}
