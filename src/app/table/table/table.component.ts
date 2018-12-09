/**
 * @author sonal prajapati
 */
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'sonal-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
// declare variable
  public student;
  public key;
  @Input() public header;
  @Input() set studentList(value) {
    this.student = value;
    this.student.forEach(element => {
      this.key = Object.keys(element);
    });
  }
  @Output() editClicked = new EventEmitter();
  @Output() deleteClicked = new EventEmitter();
// get student list
  get studentList() {
    return this.student;
  }
  constructor() { }

  ngOnInit() {
  }
  // Emit an event when user click on the button.
  public onEdit(id: any) {
    this.editClicked.emit(id);
  }
  // Emit an event when user click on the button
  public onDelete(id: any) {
    this.deleteClicked.emit(id);
  }
}
