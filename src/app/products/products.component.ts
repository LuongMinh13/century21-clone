import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/products.service';
import { UserService } from '../service/user.service';
import { IProduct } from './products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private userservice : UserService, private productService : ProductService) { }
  Username : string = "";
  imageWidth  = 250;
  imageMargin  = 2;
  imageHeight = 140;
  products: IProduct[] = []


  ngOnInit(): void {
    this.Username = this.userservice.username;
    this.products = this.productService.getProducts();
  }
}
