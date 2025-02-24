import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedCustomer: any;

  customers: Customer[] = [
   {customerNo:1, name: "Ridwan"},
   {customerNo:2, name: "Ethan"},
   {customerNo:3, name: "Nicole"},
   {customerNo:4, name: "April"},
   {customerNo:5, name: "Ephiza"},
   {customerNo:6, name: "Bonny"},
   {customerNo:7, name: "Botswe"},
  ]
}
