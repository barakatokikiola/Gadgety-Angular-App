import { Component, OnInit, ViewChild } from '@angular/core';
import { IDeactivateComponent } from '../Services/can-deactivate-guard.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  name:string;
  email:string;
  message:string;

  constructor() { }

  ngOnInit(): void {
  }

  // canExit(){
  //   if(this.name || this.email || this.message){
  //     return confirm('You have unsaved changes. Do you want to exit this page?')
  //   } else {
  //     return true;
  //   }
  // }
  @ViewChild('myForm') form: NgForm;

  onSubmit(){
    console.log(this.form)
  }
}
