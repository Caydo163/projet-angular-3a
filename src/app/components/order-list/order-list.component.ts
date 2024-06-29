import { Component } from '@angular/core';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Recipe } from '../../models/recipe.model';
import { OrderService } from '../../services/order.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [RecipeCardComponent, MatPaginatorModule, CommonModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent {
  orders: Recipe[] = [];
  ordersNumber ?: number;
  currentPage : number = 0;
  pageSize : number = 5;
  
  constructor(
    protected orderService: OrderService
  ) {
  }
  
  loadOrders() {
    this.ordersNumber = this.orderService.getOrdersNumber();
    this.orders = this.orderService.getByPage(this.currentPage, this.pageSize);
  }
  
  ngOnInit() {
    this.loadOrders();
  }
  
  pageChanged(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadOrders();
  }
}
