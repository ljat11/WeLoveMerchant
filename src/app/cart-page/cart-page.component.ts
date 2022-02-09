import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { FoodService } from '../services/food/food.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!:Cart;
  constructor(private cartServices: CartService){ //private foodSerice: FoodService) {
    // let foods = foodSerice.getAll();
    // cartServices.addToCart(foods[0]);
    // cartServices.addToCart(foods[3]);
    // cartServices.addToCart(foods[5]);
    this.setCart();
  }

  ngOnInit(): void {
  }

  removeFromCart(carItem:CartItem){
    this.cartServices.removeFromCart(carItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartServices.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

  setCart(){
    this.cart = this.cartServices.getCart();
  }
}
