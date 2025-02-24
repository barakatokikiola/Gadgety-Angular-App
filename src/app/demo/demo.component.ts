import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
// sayHi(inpEl: HTMLInputElement){
//   alert('Hi '+ inpEl.value)
// }

// @ViewChild('dobinput') dateofBirth: ElementRef;
// @ViewChild('ageinput') age: ElementRef;

// calculateAge(){
//   let birthYear = new Date(this.dateofBirth.nativeElement.value).getFullYear();
//   let currentYear = new Date().getFullYear();
//   let age = currentYear - birthYear;
//   this.age.nativeElement.value = age;
// }


sayHello(){
  console.log('Hello from demo')
}
}
