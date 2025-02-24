import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
searchValue: string ='';


@Output()
handleSearch: EventEmitter<string> = new EventEmitter<string>();


handleChange(){
  this.handleSearch.emit(this.searchValue);
  // console.log(this.searchValue)
}
// changeSearchValue(evtData: Event){
//   this.searchValue=(<HTMLInputElement>evtData.target).value;
// } 


}
