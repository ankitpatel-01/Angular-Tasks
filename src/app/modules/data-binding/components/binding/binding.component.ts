import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  title: string = "Interpolation";

  title2: string = "Property Binding";

  title3: string = "Event Binding"

  title4: string = "Two-way Binding"

  imgUrl: string = "../assets/img/landscape.jpg";

  IsDisable: boolean = true;

  myInput = "Two-way Binding";

  constructor() { }

  ngOnInit(): void {
  }

  btnClick() {
    alert("Use of Event Binding")
  }


}
