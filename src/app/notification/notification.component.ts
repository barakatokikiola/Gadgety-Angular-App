import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div [ngClass]="{fadeOut:displayNotification}">
    <p>This website uses cookies</p>
    <p class='close'>
      <button class="btn" (click)="closeNotification()">X</button>
    </p>
</div>`,
  styles: ['div{ background-color:#c5e2ee; width:80%; margin: 0 auto;padding:15px; justify-content:center; align-items:center;}',
    '.close{float: right; margin-top:-15px}',
  '.fadeOut{visibility:hidden; opacity:0; transition: visibility 0s 2s,opacity 2s linear}']
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayNotification: boolean = false;

  closeNotification(){
    this.displayNotification = true
  }

}
