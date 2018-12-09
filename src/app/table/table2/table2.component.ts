import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Header } from '../header.model';

export enum MyAction {
  EDIT = 0,
  DELETE = 1,
};

@Component({
  selector: 'sonal-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component implements OnInit {
  public dataList: any;
  @Input() public header: Header;

  @Input() public action: MyAction;

  @Input() set data(value) {
    this.dataList = value;
  }
  @Output() actionClicked: EventEmitter<any> = new EventEmitter();
  get data() {
    return this.dataList;
  }
  constructor() { }
  ngOnInit() {

  }

  actionClick(action) {
    console.log("edit", action);
    this.actionClicked.emit();  }
}
