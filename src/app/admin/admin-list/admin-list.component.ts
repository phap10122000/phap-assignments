import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  products: Product[];
  selected: Product;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }
  showDetail(product) {
    this.selected = product;
  }
  getProducts() {
    this.productService.listProducts().subscribe(data =>{
      this.products = data;
    })
    // this.products = this.productService.listProducts();
  }
}