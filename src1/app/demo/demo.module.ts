import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskComponent } from './task/task.component';
import { Task2Component } from './task2/task2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TaskComponent, Task2Component],
  exports: [Task2Component, TaskComponent]
})
export class DemoModule { }
