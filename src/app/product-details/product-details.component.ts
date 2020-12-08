import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      var value = params.get('productId')||0
      this.product = products[+value];
    });
  }

  addToCart(product:any){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!')
  }
}
