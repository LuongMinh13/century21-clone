import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }
  imageWidth  = 250;
  imageMargin  = 2;
  imageHeight = 140;

  products: any[] = [
    {
      "productId": 1,
      "productName": "Livry Gargan",
      "description": "Une grande maison a Livry Gargan",
      "prix": 100000,
      "imageUrl" : "assets/image/maison1.jpg"
    },
    {
      "productId": 2,
      "productName": "Sevran",
      "description": "Une grande maison a Sevran",
      "prix": 200000,
      "imageUrl" : "assets/image/maison2.jpg"
    },
    {
      "productId": 3,
      "productName": "Bondy",
      "description": "Une grande maison a Bondy",
      "prix": 300000,
      "imageUrl" : "assets/image/maison3.jpg"
    },
    {
      "productId": 4,
      "productName": "Nice",
      "description": "Une grande maison a Nice",
      "prix": 400000,
      "imageUrl" : "assets/image/maison4.jpg"
    },
    {
      "productId": 5,
      "productName": "Paris",
      "description": "Une grande maison a Paris",
      "prix": 500000,
      "imageUrl" : "assets/image/maison5.jpg"
    }
  ]

  ngOnInit(): void {
  }
}
