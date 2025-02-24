import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() all: number = 0;
  @Input() available: number = 0;
  @Input() not_available: number = 0;

  selectedRadio: string = 'All';
  @Output()
  handleFilter: EventEmitter<string> = new EventEmitter<string>();

  handleChange(){
    this.handleFilter.emit(this.selectedRadio); 
   
}
}
