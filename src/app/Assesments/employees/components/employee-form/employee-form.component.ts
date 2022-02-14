import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Department, Gender } from '../../models/model';
import { EmployeesService } from '../../services/employees.service';
import { SupportService } from '../../services/support.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  private isAddMode: boolean;
  private id: number;

  public submitted:boolean;
  public title: string;
  public gender: Gender[];
  public departments: Department[];
  public employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private employeeService: EmployeesService, private supportService: SupportService) {
    this.submitted = false
    this.title = "";
    this.id = 1;
    this.isAddMode = true;
    this.gender = [];
    this.departments = [];
    this.employeeForm = this.buildFrom();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.getGenders();
    this.getDepartmentList();
    if (this.isAddMode) {
      this.title = "Add User";
    } else {
      this.employeeService.getById(this.id).subscribe({
        next: (data) => {
          this.employeeForm.patchValue(data)
        },
        error: (e) => {
          console.log(e);
        }
      });
      this.title = "Edit User";
    }
  }

  //employee from
  private buildFrom(): FormGroup {
    return this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      mobile: [null, [Validators.required]],
      city: [null, [Validators.required]],
      gender: [1],
      department: [1, [Validators.required]],
      hireDate: [null],
      isPermanent: [false]
    })
  }

  //getter method for employee form
  get empForm() {
    return this.employeeForm.controls;
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

  //on Submit btn click
  public onSubmit(): void {
    this.submitted = true;
    if (this.isAddMode) {
      if(this.employeeForm.valid){
        this.addEmployee();
        this.router.navigate(['/employees'])
      }
    } else {
      this.editEmployee();
    }
  }

  //add Employee to db
  public addEmployee(): void {
    this.employeeService.createEmployee(this.employeeForm.value).subscribe({
      next: () => {
        console.log(this.employeeForm.value);
        
        alert("Employees add")
      },
      error: (e) => console.log(e)
    })
  }

  //Edit Employee to db
  public editEmployee(): void {
    this.employeeService.updateEmployee(this.id, this.employeeForm.value).subscribe({
      next: () => {
        alert("Employees updated")
      },
      error: (e) => console.log(e)
    })
  }


  //on Reset btn click
  public onRest(): void {
    this.employeeForm.reset()
  }

}
