import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as EventEmitter from 'events';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) { }

  delete() {
    if(confirm('Are you sure ??')) {
      this
        .productService
        .deleteProduct(this.product.id)
        .subscribe(
          () => {
            console.log('Product deleted from server');
            this.productService.initProducts();
            this.router.navigateByUrl('/products');
          },
          error => console.log('Failed to delete product with error: ' + error)
        );
    }
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    this
      .productService
      .getProductById(id)
      .subscribe(
        data => this.product = data
      )

  }

}
