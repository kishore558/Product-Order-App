import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OrderItem } from '../order-summary/order-summary.component';
import { OrderService } from '../order.service';

interface Product {
  product: string;
  quantity: number | null;
}

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  standalone: true,
  styleUrls: ['./product-grid.component.css'],
  imports: [CommonModule, FormsModule]
})
export class ProductGridComponent {
  @Output() orderSelected = new EventEmitter<OrderItem[]>();
  productList: string[] = ['Product1', 'Product2', 'Product3'];
  products: Product[] = [];

  constructor(private orderService: OrderService) {} // Inject OrderService

  addProduct(product: string, quantity: number) {
    if (product && quantity > 0) {
      this.products.push({ product, quantity });
    }
  }

  selectOrder() {
    const validProducts = this.products.filter(p => p.product && p.quantity !== null);
    const orderItems = validProducts as OrderItem[];
    this.orderSelected.emit(orderItems);
    this.orderService.setOrder(orderItems); // Use orderService to set the order
  }
}
