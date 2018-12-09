/**
 * @author sonal prajpati
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// ---------------------------//
import { TableComponent } from './table/table.component';
import { Table2Component } from './table2/table2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TableComponent, Table2Component],
  exports: [TableComponent, Table2Component]
})
export class TableModule { }
