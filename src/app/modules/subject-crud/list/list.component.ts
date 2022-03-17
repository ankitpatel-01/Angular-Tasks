import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InternsService } from '../interns.service';
import { Intern } from '../mock/intern.mock';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public interns: Intern[];


  constructor(private service: InternsService) {
    this.interns = [];
  }

  ngOnInit(): void {
    this.getAllIntern();
  }

  public getAllIntern(): void {
    this.service.data$.subscribe({
      next: (data) => {
        this.interns = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  deleteIntern(id: number): void {
    this.service.delete(id);
  }

  editIntern(intern: Intern): void {
    this.service.sendDataToEdit(intern)
  }
}
