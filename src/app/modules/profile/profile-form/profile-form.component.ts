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

  myProfileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myProfileForm = this.buildForm();
  }

  buildForm(): FormGroup {
    return this.fb.group({
      "username": new FormControl('', [Validators.required, Validators.minLength(3)]),
      "email": new FormControl('', [Validators.required, Validators.email]),
      "contactNo": new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      "gender": new FormControl(null, Validators.required),
      "department": new FormControl("FrontEnd", Validators.required),
      "skills": this.fb.array([
        this.dynamicField()
      ]),
      "termsAccept": new FormControl(null, Validators.required)
    })
  }



  ngOnInit(): void {

  }


  dynamicField(): FormGroup {
    return this.fb.group({
      technicalSkills: ['', Validators.required]
    })
  }

  get profileForm() { return this.myProfileForm.controls; }

  get skills() {
    return this.myProfileForm.controls["skills"] as FormArray;
  }

  addSkills() {
    this.skills.push(this.dynamicField())
  }

  deleteSkills(index: number) {
    if (this.skills.length != 1) {
      this.skills.removeAt(index)
    }
  }


  onFormSubmit(): void {
    console.log(this.myProfileForm)
  }

}
