import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { Product } from '../product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: Product;

  constructor() {
  }

  ngOnInit(): void {
  }

}
