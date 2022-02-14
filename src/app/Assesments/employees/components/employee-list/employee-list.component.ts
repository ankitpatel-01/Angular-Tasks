import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ModelService } from 'src/app/model/model.service';
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

  //for search inputs
  public name = new FormControl('');
  public department = new FormControl('');
  public city = new FormControl('');

  //address from
  AddressForm :FormGroup

  constructor(private employeeService: EmployeesService, private supportService: SupportService, private modalService: ModelService, private fb:FormBuilder) {
    this.Employees = [];
    this.departments = [];
    this.gender = [];

     //Address form
     this.AddressForm =  this.fb.group({
      addresses: this.fb.array([
        this.addressItem(),
      ])
    });
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
      next: (data) => {
        this.Employees = data;
      },
      error: (e) => console.log(e)
    })
  }

  //delete Employee
  public deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe({
      next: () => {
        // return this.Employees = this.Employees.filter((data)=>{
        //   data.id !== id
        // })
        this.getEmployeesList();
      },
      error: (e) => console.log(e)
    })
  }

  //Open & close User Details Model
  openModal(id: number) {
    this.modalService.open(id);
  }
  closeModal(id: number) {
    this.modalService.close(id);
  }


  get addresses() {
    return this.AddressForm.controls["addresses"] as FormArray;
  }

  addressItem(): FormGroup {
    return this.fb.group({
      address: '',
    });
  }
  
  // Add address filed to From
  addItem(): void {
    this.addresses.push(this.addressItem())
  }
  public deleteItem(index: number): void {
    if (this.addresses.length != 1) {
      this.addresses.removeAt(index)
    }
  }

}
