import { Component, OnInit } from '@angular/core';
import { BestsellerService } from '../Services/bestseller.service';


@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: ['./bestsellers.component.css']
})
export class BestsellersComponent implements OnInit {

  bestsellers:  {
    id: number,
    name: string,
    availability: string,
    price: number,
    color: string,
    image: string,
    details: string
   }[] = [];
  constructor(private bestsellerService: BestsellerService) { }

  ngOnInit(): void {
    this.bestsellers = this.bestsellerService.bestsellers
    // this.bestsellers = this.route.snapshot.data['bestsellers'];
    // this.productService.getProducts().then((data:any) =>{
    //   this.products = data;
    // })
  }
  


  getAllProducts(){
   return this.bestsellers.length
  }
  

  
    
  
  }


