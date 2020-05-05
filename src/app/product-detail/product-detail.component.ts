import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";
import { Product } from '../Product';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
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