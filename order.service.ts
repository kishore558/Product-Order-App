import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderItem } from './order-summary/order-summary.component';


interface Product {
  product: string;
  quantity: number|null;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderSubject = new BehaviorSubject<Product[]>([]);
  private apiKey = 'https://voicerss-text-to-speech.p.rapidapi.com/?key=${this.apiKey}&hl=en-us&src=${encodeURIComponent(text)';  // Replace with your actual API key

  constructor(private http: HttpClient) {}

  setOrder(order: Product[]) {
    this.orderSubject.next(order);
  }

  getOrder(): Observable<OrderItem[]> {
    return this.http.get<OrderItem[]>('https://voicerss-text-to-speech.p.rapidapi.com/?key=${this.apiKey}&hl=en-us&src=${encodeURIComponent(text)');
  }

  textToSpeech(text: string) {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  }
}
