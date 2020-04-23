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
  page = 1;
  pageSize = 4;
  collectionSize = Product.length;
  searchText;
  // api = 'https://5e79ba9717314d0016133574.mockapi.io/list'
  
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