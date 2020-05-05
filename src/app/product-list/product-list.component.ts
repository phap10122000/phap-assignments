import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Product } from '../Product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
   products: Product[];
  selected: Product;
   page = 1;
  pageSize = 6;
  collectionSize = Product.length;
  constructor(private productService: ProductService) { }

  ngOnInit() {this.getProducts();
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