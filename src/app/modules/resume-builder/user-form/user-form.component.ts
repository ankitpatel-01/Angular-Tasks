import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResumeService } from '../service/resume.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;

  constructor(private fb: FormBuilder, private service:ResumeService, private route:Router) {
    this.userForm = this.buildForm()
  }

  ngOnInit(): void {  
  }


  // build the user form group 
  buildForm(): FormGroup {
    return this.fb.group({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      contactNo: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      postname: new FormControl('', [Validators.required]),
      skills: this.fb.array([
        this.skillField()
      ]),
      experiences: this.fb.array([
        this.experienceField()
      ]),
      educations:this.fb.array([
        this.educationField()
      ])
    })
  }

  get user() { return this.userForm.controls; }

  get skills():FormArray {
    return this.userForm.controls["skills"] as FormArray;
  }

  get experiences():FormArray {
    return this.userForm.controls["experiences"] as FormArray;
  }

  get educations():FormArray {
    return this.userForm.controls["educations"] as FormArray;
  }

  //skills form group
  skillField(): FormGroup {
    return this.fb.group({
      technicalSkills: ['', Validators.required]
    })
  }

   //experience form group
  experienceField(): FormGroup {
    return this.fb.group({
      companyName: ['', Validators.required],
      years: [null, Validators.required],
      post:['',Validators.required]
    })
  }

   //education form group
  educationField(): FormGroup {
    return this.fb.group({
      schoolName: ['', Validators.required],
      major: ['', Validators.required],
      cgpa:[null,Validators.required]
    })
  }

  //add skill and delete skill methods
  addSkills() {
    this.skills.push(this.skillField())
  }
  deleteSkills(index: number) {
    if (this.skills.length != 1) {
      this.skills.removeAt(index)
    }
  }

  //add experiences and delete experiences methods
  addExperience(){
    this.experiences.push(this.experienceField())
  }
  deleteExperience(index: number) {
    if (this.experiences.length != 1) {
      this.experiences.removeAt(index)
    }
  }

  //add educations and delete educations methods
  addEducation(){
    this.educations.push(this.educationField())
  }
  deleteEducation(index: number) {
    if (this.educations.length != 1) {
      this.educations.removeAt(index)
    }
  }

  //On Submit
  onSubmit(){
    this.service.deleteUser(1).subscribe(()=>{
      this.service.saveUser(this.userForm.value).subscribe();
      this.route.navigate(['resumebuilder/view'])
    })
  }

}
