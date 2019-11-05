import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root'
})
export class CartService {
  items = [];

  constructor() { }

  //定义把商品添加到购物车、返回购物车商品以及清除购物车商品的方法
   addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}