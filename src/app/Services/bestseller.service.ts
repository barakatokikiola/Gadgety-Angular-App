import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})



export class BestsellerService {


 bestsellers = [
    {
      id: 1,
      name: "Wireless Headphones",
      availability: "Available",
      price: 99.99,
      color: "Black",
      image: "assets/headphone.jpg",
      details: "High-quality wireless headphones with noise cancellation.",
    },
   
    {
      id: 4,
      name: "Laptop",
      availability: "Not Available",
      price: 1299.99,
      color: "Silver",
      image: "assets/pc.jpg",
      details: "Lightweight laptop with long battery life and fast performance.",
    },
    {
      id: 5,
      name: "Smartwatch",
      availability: "Available",
      price: 199.99,
      color: "Rose Gold",
      image: "assets/smartwatch.jpg",
      details: "Feature-rich smartwatch with fitness tracking and notifications.",
    },
    {
      id: 7,
      name: "Gaming Mouse",
      availability: "Available",
      price: 59.99,
      color: "RGB",
      image: "assets/gamingmouse.jpg",
      details: "Ergonomic gaming mouse with customizable RGB lights and precise controls.",
    },
  
  ];
  

  constructor() { }

  getBestsellers(){
    const productList = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.bestsellers)
      }, 1000)
    });
    return productList;
  }
}
