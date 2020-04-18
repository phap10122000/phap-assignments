import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-admin-manager',
  templateUrl: './admin-manager.component.html',
  styleUrls: ['./admin-manager.component.css']
})
export class AdminManagerComponent implements OnInit {
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
   removeitem(id) {
    this.productService.removeProducts(id).subscribe(Response =>{
      this.products = this.products.filter(product => product.id !== id);
  })
  }
}