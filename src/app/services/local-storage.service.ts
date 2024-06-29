import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  
  private set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  private get(key: string, defaultValue: string = ''): any {
    return JSON.parse(localStorage.getItem(key) || defaultValue);
  }
  
  setRecipes(recipes: Recipe[]) {
    this.set('recipes', recipes);
  }
  
  getRecipes(): Recipe[] {
    return this.get('recipes', '[]');
  }
  
  setOrders(orders: Recipe[]) {
    this.set('orders', orders);
  }
  
  getOrders(): Recipe[] {
    return this.get('orders', '[]');
  }
}
