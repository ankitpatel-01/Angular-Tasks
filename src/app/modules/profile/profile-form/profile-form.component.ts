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
  // skills: FormArray;

  constructor(private fb: FormBuilder) {
    this.myReactiveForm = this.buildForm();
  }

  buildForm() :FormGroup{
    return this.fb.group({
      "username": new FormControl('', [Validators.required, Validators.minLength(3)]),
      "email": new FormControl('', [Validators.required, Validators.email]),
      "contactNo": new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      "gender": new FormControl(null, Validators.required),
      "department": new FormControl("FrontEnd", Validators.required),
      // "skills": this.fb.array([
      //   this.dynamicField()
      // ]),
      "termsAccept": new FormControl(null, Validators.required)
    })
  }



  ngOnInit(): void {

  }


  dynamicField(): FormGroup {
    return this.fb.group({
      technicalSkills: ['']
    })
  }

  // addSkills() {
  //   this.skills = this.myReactiveForm.get('skills') as FormArray;
  //   this.skills.push(this.dynamicField())
  // }


  onFormSubmit(): void {
    console.log(this.myReactiveForm)
  }

}
