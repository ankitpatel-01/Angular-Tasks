import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Intern } from '../mock/intern.mock';

@Component({
  selector: 'app-intern-list',
  templateUrl: './intern-list.component.html',
  styleUrls: ['./intern-list.component.scss']
})
export class InternListComponent implements OnInit {


  @Input() interns: Intern[];

  @Output() editId: EventEmitter<number>;
  @Output() deleteId: EventEmitter<number>;


  constructor() {
    this.interns = [];
    this.editId = new EventEmitter<number>();
    this.deleteId = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  editIntern(id: number) {
    this.editId.emit(id);
    console.log("edit ", id);
  }

  deleteIntern(id: number) {
    this.deleteId.emit(id);
  }
}
