import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})



export class ProductsService {


  products = [
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
      id: 2,
      name: "Smartphone",
      availability: "Available",
      price: 699.99,
      color: "Blue",
      image: "assets/smartphone.jpg",
      details: "Latest model with a powerful processor and high-resolution camera.",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      availability: "Available",
      price: 49.99,
      color: "Red",
      image: "assets/speaker.jpg",
      details: "Portable Bluetooth speaker with deep bass and 10-hour battery life.",
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
      id: 6,
      name: "Tablet",
      availability: "Available",
      price: 349.99,
      color: "Space Gray",
      image: "assets/tablet.jpg",
      details: "Sleek tablet with a high-resolution screen and great portability.",
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
    {
      id: 8,
      name: "4K Smart TV",
      availability: "Available",
      price: 799.99,
      color: "Black",
      image: "assets/4ktv.jpg",
      details: "Ultra HD 4K smart TV with HDR and voice control.",
    },
    {
      id: 9,
      name: "Portable Charger",
      availability: "Available",
      price: 29.99,
      color: "White",
      image: "assets/portablecharger.jpg",
      details: "Compact portable charger with 10,000mAh capacity.",
    },
    {
      id: 10,
      name: "Noise-Cancelling Earbuds",
      availability: "Not Available",
      price: 129.99,
      color: "Gray",
      image: "assets/earbuds.jpg",
      details: "Earbuds with active noise cancellation for a premium listening experience.",
    },
    {
      id: 11,
      name: "Smart Thermostat",
      availability: "Available",
      price: 199.99,
      color: "White",
      image: "assets/thermostat.jpg",
      details: "Energy-efficient smart thermostat with remote control and schedule settings.",
    },
    {
      id: 12,
      name: "Fitness Tracker",
      availability: "Available",
      price: 79.99,
      color: "Black",
      image: "assets/fitness.jpg",
      details: "Advanced fitness tracker with heart rate monitoring and sleep tracking.",
    }
  ];
  

  constructor() { }

  getProducts(){
    const productList = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products)
      }, 1000)
    });
    return productList;
  }
}
