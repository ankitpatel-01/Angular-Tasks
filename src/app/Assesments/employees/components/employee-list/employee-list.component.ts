import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { Department, Gender } from '../../models/model';
import { EmployeesService } from '../../services/employees.service';
import { SupportService } from '../../services/support.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  public Employees: Employee[];
  public departments: Department[];
  public gender: Gender[];

  constructor( private employeeService: EmployeesService, private supportService: SupportService ) { 
    this.Employees = [];
    this.departments = [];
    this.gender = [];
  }

  ngOnInit(): void {
    this.getGenders();
    this.getDepartmentList();
    this.getEmployeesList();
  }


  //get gender from db and store in array
  private getGenders(): void {
    this.supportService.getGender().subscribe({
      next: (data: Gender[]) => {
        this.gender = data;
      },
      error: (e) => console.log(e)
    });
  }

  //get department from db and store in array
  private getDepartmentList(): void {
    this.supportService.getDepartments().subscribe({
      next: (data: Department[]) => {
        this.departments = data;
      },
      error: (e) => console.log(e)
    });
  }

  //get Employees list from db
  private getEmployeesList(): void {
    this.employeeService.getEmployees().subscribe({
      next:(data)=>{
        this.Employees = data;
      },
      error:(e)=>console.log(e)
    })
  }

}
