import { Component, OnInit } from '@angular/core';
import { IDeactivateComponent } from '../Services/can-deactivate-guard.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, IDeactivateComponent {

  name:string;
  email:string;
  message:string;

  constructor() { }

  ngOnInit(): void {
  }

  canExit(){
    if(this.name || this.email || this.message){
      return confirm('You have unsaved changes. Do you want to exit this page?')
    } else {
      return true;
    }
  }
}
