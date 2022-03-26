import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InternsService } from '../interns.service';
import { Intern } from '../mock/intern.mock';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public internForm: FormGroup;


  private _editData: Intern;
  private _isEdit: boolean;
  private _id:number;


  constructor(private fb: FormBuilder,private service: InternsService) {
    this.internForm = this.buildInternForm();
    this._isEdit = false;
  }

  ngOnInit(): void {
    this.service.editData$.subscribe({
      next:(data)=>{
        this._id = data.id;
        this._editData = data;
        this._isEdit = true;
        this.internForm.patchValue(this._editData)
      },
      error:(e)=>{
        console.log(e)
      }
    })
  }

  buildInternForm(): FormGroup {
    return this.fb.group({
      name: [null, Validators.required],
      company: [null, Validators.required],
    });
  }

  onSubmit() {
    if(!this._isEdit){
      this.service.add(this.internForm.value);
    }else{
      this.service.edit(this._id,this.internForm.value);
      this._isEdit = false;
    }
    this.internForm.reset();
  }

}
