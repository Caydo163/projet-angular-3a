import { Injectable } from '@angular/core';
import { INGREDIENTS } from '../data/ingredient.stub';
import { Ingredient } from '../models/ingredient.model';
import { IngredientApiService } from './ingredient-api.service';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  public ingredients : Ingredient[] = []

  constructor(
    protected ingredientApiService: IngredientApiService,
  ) {
    this.ingredients = INGREDIENTS;
    this.ingredientApiService.getIngredients().subscribe(apiIngredients => {
      apiIngredients.forEach(ingredient => {
        this.ingredients.push(ingredient);
      });
    });
  }
  
  private getMaxId(): number {
    if (this.ingredients.length === 0) {
      return 0;
    }
    return Math.max(...this.ingredients.map(ingredient => Number(ingredient.id)));
  }
  
  private indexExist(id: number): boolean {
    return this.ingredients.find(ingredient => ingredient.id === id) !== undefined;
  }

  getAll(): Ingredient[] {
    return this.ingredients;
  }
  
  getIngredientById(id : number): Ingredient | undefined {
    return this.ingredients.find(ingredient => ingredient.id === id);
  }
  
  addIngredient(ingredient: Ingredient) {
    ingredient.id = Number(ingredient.id);
    if (!ingredient.id || ingredient.id === 0 || this.indexExist(ingredient.id)) {
      ingredient.id = this.getMaxId() + 1;
    }
    this.ingredients.push(ingredient);
    this.ingredientApiService.addIngredient(ingredient);
  }
  
  updateIngredient(ingredient: Ingredient) {
    const index = this.ingredients.findIndex(i => i.id === ingredient.id);
    if (index !== -1) {
      this.ingredients[index] = ingredient;
      this.ingredientApiService.updateIngredient(ingredient);
    }
  }
}
