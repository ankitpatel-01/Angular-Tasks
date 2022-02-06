import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Department } from './department.model';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  departments: Department[] = [
    {
      "name": "UX"
    },
    {
      "name": "FrontEnd"
    },
    {
      "name": "Database"
    },
    {
      "name": ".Net"
    },
    {
      "name": "QA"
    }
  ];

  myReactiveForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myReactiveForm = new FormGroup(
      {
        "username": new FormControl('', [Validators.required, Validators.minLength(3)]),
        "email": new FormControl('', [Validators.required, Validators.email]),
        "contactNo": new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
        "gender": new FormControl(null, Validators.required),
        "department": new FormControl("FrontEnd", Validators.required),
        // "skills": this.fb.array([
        //   this.skillField()
        // ]),
        "termsAccept": new FormControl(null, Validators.required)
      }
    );
  }



  ngOnInit(): void {

  }

  onFormSubmit(): void {
    console.log(this.myReactiveForm)
  }

}
