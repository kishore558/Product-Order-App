import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { OrderItem } from './order-summary/order-summary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, ProductGridComponent, OrderSummaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'product-order-app';
  showOrder = false;
  order: OrderItem[] = [];

  updateOrder(order: OrderItem[]) {
    this.order = order;
    
}}
