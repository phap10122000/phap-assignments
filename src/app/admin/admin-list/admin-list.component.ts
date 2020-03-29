import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
import { Product } from '../Product';
import { ListService } from './list.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  products: Product[];
  selected: Product;
  constructor(private productService: ListService) { }

  ngOnInit() {
  }

}