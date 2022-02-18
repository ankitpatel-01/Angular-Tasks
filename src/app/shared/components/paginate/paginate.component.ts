import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent implements OnInit {


  public pageNumbers: number[];
  public selectedPage: number;
  private _dataPerPage : number;
  private _totaldata: number;

  get dataPerPage():number{
    return this._dataPerPage;
  }
  get totaldata():number{
    return this._totaldata;
  }

  @Input() set dataPerPage(num: number){
    this._dataPerPage = num;
  }

  @Input() set totaldata(num: number){
    this._totaldata = num;
    this.pageNumbers = [];
    this.getPageNumbers();
  }

  @Output() currentPage: EventEmitter<number> = new EventEmitter<number>();
  constructor() { 
    this.pageNumbers=[];
    this.selectedPage=1;
    this._dataPerPage=0;
    this._totaldata=0;
  }

  ngOnInit(): void {
  }


  private getPageNumbers(){
    for(let i=1; i<= Math.ceil(this._totaldata/this._dataPerPage);i++){
      this.pageNumbers.push(i);
    }
  }

  public paginate(pageNo:number){
    this.selectedPage=pageNo;
    this.currentPage.emit(pageNo)
  }

  public previous(){
    if(this.selectedPage != 1){
      this.paginate(this.selectedPage-1);
    }  
  }

  public forward(){
   if(this.selectedPage != this.pageNumbers[this.pageNumbers.length-1]){
    this.paginate(this.selectedPage+1)
   }
  }

}
