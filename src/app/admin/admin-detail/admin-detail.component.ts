import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";
import { Product } from '../Product';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css']
})
export class AdminDetailComponent implements OnInit {
  product: Product;
  constructor(private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProduct();
  }
  getProduct() {
    this.route.params.subscribe(param => {
      this.productService.ListProduc(param.productID).subscribe(data => {
        // console.log(data);
        this.product = data;
      })

    })
  }
}