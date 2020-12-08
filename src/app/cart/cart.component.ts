import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service'
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items : any[] = [];
  constructor(
    private cartService:CartService,
    private http: HttpClient 
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems()
  }

}
