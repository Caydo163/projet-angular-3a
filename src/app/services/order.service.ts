import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public recipes : Recipe[] = []

  constructor(
    private localStorageService: LocalStorageService
  ) {
    this.recipes = this.localStorageService.getOrders();
  }

  getAll(): Recipe[] {
    return this.recipes;
  }
  
  getByPage(page: number, pageSize: number): Recipe[] {
    return this.recipes.slice(page * pageSize, (page + 1) * pageSize);
  }
  
  getOrdersNumber(): number {
    return this.recipes.length;
  }
  
  addOrder(recipe: Recipe): void {
    this.recipes.push(recipe);
    this.localStorageService.setOrders(this.recipes);
  }
}
