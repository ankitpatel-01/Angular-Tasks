import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Skill } from '../model/skill';
import { Department } from './department.model';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {


  //list of department array
  public departments: Department[] = [
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

  public myskills: Skill = {} as Skill;

  public myProfileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myProfileForm = this.buildForm();
  }

  //form builder menthod
  public buildForm(): FormGroup {
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

  //skill field
  private dynamicField(): FormGroup {
    return this.fb.group({
      technicalSkills: ['', Validators.required]
    })
  }

  get profileForm() { return this.myProfileForm.controls; }

  get skills() {
    return this.myProfileForm.controls["skills"] as FormArray;
  }

  //add skill and delete methods
  public addSkills(): void {
    this.skills.push(this.dynamicField())
  }

  public deleteSkills(index: number): void {
    if (this.skills.length != 1) {
      this.skills.removeAt(index)
    }
  }

  //on form submit
  public onFormSubmit(): void {
    console.log(this.myProfileForm.value)
    this.myskills = this.skills.value;
    console.log(this.myskills);

  }

}
