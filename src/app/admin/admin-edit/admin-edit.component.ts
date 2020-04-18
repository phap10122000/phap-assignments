import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from '../Product';
import { ProductService } from "../product.service";
@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {
  product: Product = new Product;
  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getProduct();
  }
  getProduct() {
    this.route.params.subscribe(param => {
      this.productService.ListProduc(param.id).subscribe(data =>{
        this.product = data;
    })
    })
  }
   
  submitForm() {
    this.productService.updateProducts(this.product).subscribe(data => {
      this.router.navigate(['/admin/manager']);
    })
  }
}