import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[appStatus]'
})
export class StatusDirective {

  constructor(private el: ElementRef) { }
  status = new Map([
    ["DRAFT", 1],
    ["SENT", 2],
    ["EXPIRED", 3],
    ["INVOICED", 4]
  ]);
  ngOnInit() {
    this.status.forEach(element => {
      console.log(element);

      if (element === 1) {
        console.log('DRAFT');
        this.el.nativeElement.style.backgroundColor = "grey";
      }
      else if (element === 2) {
        console.log('SENT');
        this.el.nativeElement.style.backgroundColor = "blue";
      }
      else if (element === 3) {
        console.log('EXPIRED');
        this.el.nativeElement.style.backgroundColor = "red";
      }
      else {
        console.log('INVOICED');
        this.el.nativeElement.style.backgroundColor = "green";
      }
    });
  }
}