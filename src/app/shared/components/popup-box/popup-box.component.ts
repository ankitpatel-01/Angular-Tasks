import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-box',
  templateUrl: './popup-box.component.html',
  styleUrls: ['./popup-box.component.scss']
})
export class PopupBoxComponent implements OnInit {

  @Input() type: string;

  constructor() {
    this.type = "alert";
  }

  ngOnInit(): void {
    if (this.type != "alert") {
      this.type = this.type;
    }
  }

  close(value: string) {
    console.log(value)
  }

}
