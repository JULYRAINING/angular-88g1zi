import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items:any[] = []
  constructor() { }

  addToCart(product:any){
    this.items.push(product); 
  }
  getItems(){
    return this.items;
  }
  clearCart(){
    this.items = []
    return this.items;
  }
}
