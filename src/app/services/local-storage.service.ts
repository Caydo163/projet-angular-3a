import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  
  setRecipes(recipes: Recipe[]) {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }
  
  getRecipes(): Recipe[] {
    return JSON.parse(localStorage.getItem('recipes') || '[]');
  }
}
