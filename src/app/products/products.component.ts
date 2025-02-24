import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:  {
    id: number,
    name: string,
    availability: string,
    price: number,
    color: string,
    image: string,
    details: string
   }[] = [];
  constructor(private route:ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    // this.products = this.productService.products
    this.products = this.route.snapshot.data['products'];
    // this.productService.getProducts().then((data:any) =>{
    //   this.products = data;
    // })
  }
  


  getAllProducts(){
   return this.products.length
  }
  getAvailableProducts(){
    return this.products.filter(product => product.availability === 'Available').length;
  }
  getNotAvailableProducts(){
    return this.products.filter(product => product.availability === 'Not Available').length;
  }
  productCountBtn: string = 'All';
    
  searchText: string = '';

  onFilterBtnChange(data: string){
    this.productCountBtn = data;

  
  }
  onSearchChange(searchValueText: string){
  this.searchText = searchValueText;
    
  
  }
}
