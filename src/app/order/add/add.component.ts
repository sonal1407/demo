import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  data = [];
  addForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loadForm();
    this.data = [
      {
        "id": 3,
        "quotation_number": "QT-10003",
        "issue_date": "26-Apr-2016",
        "expiry_date": "26-May-2016",
        "customer_id": 3,
        "grand_total": 8.4,
        "discount": 0,
        "sgst": 1.23,
        "cgst": 0,
        "products": [
          {
            "product_id": 3,
            "qty": 1
          }
        ],
        "status": "Sent"
      },
      {
        "id": 4,
        "quotation_number": "QT-10004",
        "issue_date": "01-Jan-2018",
        "expiry_date": "24-Feb-2018",
        "customer_id": 4,
        "grand_total": 9.7,
        "discount": 0,
        "sgst": 8.59,
        "cgst": 0,
        "products": [
          {
            "product_id": 4,
            "qty": 1
          }
        ],
        "status": "Sent"
      },
      {
        "id": 5,
        "quotation_number": "QT-10005",
        "issue_date": "21-May-2016",
        "expiry_date": "15-Jun-2016",
        "customer_id": 5,
        "grand_total": 9,
        "discount": 0,
        "sgst": 8.67,
        "cgst": 0,
        "products": [
          {
            "product_id": 5,
            "qty": 1
          },
          {
            "product_id": 10,
            "qty": 1
          }
        ],
        "status": "Expired"
      },
      {
        "id": 6,
        "quotation_number": "QT-10006",
        "issue_date": "31-Dec-2015",
        "expiry_date": "16-Jan-2016",
        "customer_id": 6,
        "grand_total": 9.8,
        "discount": 0,
        "sgst": 5.03,
        "cgst": 0,
        "products": [
          {
            "product_id": 6,
            "qty": 1
          }
        ],
        "status": "Invoiced"
      },
      {
        "id": 7,
        "quotation_number": "QT-10007",
        "issue_date": "18-May-2014",
        "expiry_date": "07-jun-2014",
        "customer_id": 7,
        "grand_total": 8.8,
        "discount": 0,
        "sgst": 3.88,
        "cgst": 0,
        "products": [
          {
            "product_id": 7,
            "qty": 1
          }
        ],
        "status": "Expired"
      },
      {
        "id": 8,
        "quotation_number": "QT-10008",
        "issue_date": "20-Mar-2017",
        "expiry_date": "05-May-2017",
        "customer_id": 8,
        "grand_total": 6.4,
        "discount": 0,
        "sgst": 0.87,
        "cgst": 0,
        "products": [
          {
            "product_id": 8,
            "qty": 1
          }
        ],
        "status": "Draft"
      },
    ];
  }
  loadForm() {
    this.addForm = this.fb.group({
      orderDate: [''],
      product: this.fb.group({
        productId: [''],
        productName: ['']
      }),
      customer: this.fb.group({
        customerId: [''],
        customerName: ['']
      })
    })
  }
}
