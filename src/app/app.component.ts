import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { MyAction } from './table/table2/table2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private el: ElementRef) { }
  // ngOnInit(){}
  @Input() status = new Map([
    ["DRAFT", 1],
    ["SENT", 2],
    ["EXPIRED", 3],
    ["INVOICED", 4]
  ]);
  temp;
  ngOnInit() {
    this.status.forEach(element => {
      console.log(element);
      if (element === 1) {
        this.temp = element;
        console.log('DRAFT');

        // this.el.nativeElement.style.color = "grey";
      }
      else if (element === 2) {
        console.log('SENT');
        // this.el.nativeElement.style.color = "blue";
      }
      else if (element === 3) {
        console.log('EXPIRED');
        // this.el.nativeElement.style.color = "red";
      }
      // else {
      //   console.log('INVOICED');
      //   this.el.nativeElement.style.color = "green";
      // }
    });
  }
  action: MyAction;
  heading = {
    name: ['Id', 'Customer_number', 'email'],
    key: ['id', 'customer_number', 'email']
  };
  data = [
    {
      'id': 9,
      'customer_number': 'C-10009',
      'name': 'Moore Hahn',
      'company': 'EXOSPACE',
      'group': 'Retailer',
      'created_at': '05-Dec-2018',
      'email': 'moorehahn@exospace.com',
      'mobile_number': 9095043552,
      'address': '311 Preston Court, Grill, Oklahoma, 476'
    },
    {
      'id': 7,
      'customer_number': 'C-10009',
      'name': 'Moore Hahn',
      'company': 'EXOSPACE',
      'group': 'Retailer',
      'created_at': '05-Dec-2018',
      'email': 'moorehahn@exospace.com',
      'mobile_number': 9095043552,
      'address': '311 Preston Court, Grill, Oklahoma, 476'
    }
  ];
  actionClick() {
    console.log('hello from app');

  }
}