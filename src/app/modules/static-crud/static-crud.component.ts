import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Intern, INTERNS } from './mock/intern.mock';
import { InternService } from './service/intern.service';

@Component({
  selector: 'app-static-crud',
  templateUrl: './static-crud.component.html',
  styleUrls: ['./static-crud.component.scss']
})
export class StaticCrudComponent implements OnInit {

  public interns: Intern[];
  public isAdd: boolean;
  public dataToEdit: Intern;


  constructor(private service: InternService) {
    this.interns = [];
    this.isAdd = false;
    this.dataToEdit = {} as Intern;
  }

  ngOnInit(): void {
    this.getAllIntern();
  }

  toggleForm() {
    this.isAdd = !this.isAdd;
  }


  public getAllIntern(): void {
    this.interns = this.service.get();
  }

  public addIntern(intern: Intern): void {
    this.service.add(intern);
    this.getAllIntern();
  }

  editIntern(id: number) {
    this.isAdd = true;
    this.dataToEdit = this.service.getById(id)
  }

  updateInter(data: Intern) {
    console.log(this.dataToEdit.id, data)
    this.service.update(this.dataToEdit.id, data);

  }


  deleteIntern(id: number) {
    this.service.delete(id);
  }

}
