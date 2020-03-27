import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { List } from '../List';
import { ListService } from '../list.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  lists: List[];
  selected: List;
  constructor(private productService: ListService) { }

  ngOnInit() {
  }
  getProducts() {
    this.productService.listProducts().subscribe(data =>{
      this.products = data;
    })
    // this.products = this.productService.listProducts();
  }
}