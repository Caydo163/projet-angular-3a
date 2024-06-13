import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RECIPES } from '../data/recipe.stub';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public recipes : Recipe[] = []

  constructor(
  ) {
    this.recipes = RECIPES;
  }

  getAll(): Recipe[] {
    return this.recipes;
  }
  
  getByPage(page: number, pageSize: number): Recipe[] {
    return this.recipes.slice(page * pageSize, (page + 1) * pageSize);
  }
  
  getRecipeById(id : number): Recipe | undefined {
    return this.recipes.find(recipe => recipe.id === id);
  }
  
  getRecipesNumber(): number {
    return this.recipes.length;
  }
}
