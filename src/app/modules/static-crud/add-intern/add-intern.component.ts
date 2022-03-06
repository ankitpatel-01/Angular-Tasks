import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Intern } from '../mock/intern.mock';

@Component({
  selector: 'app-add-intern',
  templateUrl: './add-intern.component.html',
  styleUrls: ['./add-intern.component.scss']
})
export class AddInternComponent implements OnInit {

  public internForm: FormGroup;
  public isEditMode: boolean;
  @Input() dataToedit: Intern;
  @Output() intern: EventEmitter<Intern>
  @Output() editIntern: EventEmitter<Intern>

  constructor(private fb: FormBuilder) {
    this.isEditMode = false;
    this.internForm = this.buildInternForm();
    this.dataToedit = {} as Intern;
    this.intern = new EventEmitter<Intern>();
    this.editIntern = new EventEmitter<Intern>();
  }

  ngOnInit(): void {
    if (this.dataToedit != {} as Intern) {
      this.isEditMode = true;
    }
    if (this.isEditMode) {
      this.internForm.patchValue(this.dataToedit)
      console.log("in form data to edit", this.dataToedit);
    }
  }

  buildInternForm(): FormGroup {
    return this.fb.group({
      name: [null, Validators.required],
      company: [null, Validators.required],
    });
  }

  onSubmit() {
    if (!this.isEditMode) {
      this.intern.emit(this.internForm.value)
    }
    else {
      this.editIntern.emit(this.internForm.value)
      this.isEditMode = false
    }
    this.internForm.reset();
  }

}
