import { Component,Input, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { CommonModule } from '@angular/common';

export interface OrderItem {
  product: string;
  quantity: number|null;
}

@Component({
  selector: 'app-order-summary',
  standalone: true,
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css'],
  imports: [CommonModule],
})
export class OrderSummaryComponent implements OnInit {
  @Input() order :OrderItem[]= [];

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orderService.getOrder().subscribe(order => this.order = order);
  }

  readOrder() {
    const orderText = this.order.map(o => `${o.product}: ${o.quantity}`).join(', ');
    this.orderService.textToSpeech(orderText);
    const msg = new SpeechSynthesisUtterance(orderText);
    window.speechSynthesis.speak(msg);
    
  }
}
