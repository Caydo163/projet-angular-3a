import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RECIPES } from '../data/recipe.stub';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public recipes : Recipe[] = []

  constructor(
    private localStorageService: LocalStorageService
  ) {
    this.recipes = this.localStorageService.getRecipes();
  }
  
  private getMaxId(): number {
    if (this.recipes.length === 0) {
      return 0;
    }
    return Math.max(...this.recipes.map(recipe => Number(recipe.id)));
  }
  
  private indexExist(id: number): boolean {
    return this.recipes.find(recipe => recipe.id === id) !== undefined;
  }

  getAll(): Recipe[] {
    return this.localStorageService.getRecipes();
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
  
  private setRecipeIngredientId(recipe: Recipe) {
    recipe.ingredients.forEach(ingredient => {
      ingredient.recipeId = recipe.id;
    });
  }
  
  addRecipe(recipe: Recipe): Recipe {
    recipe.id = Number(recipe.id);
    if (!recipe.id || recipe.id === 0 || this.indexExist(recipe.id)) {
      recipe.id = this.getMaxId() + 1;
    }
    this.setRecipeIngredientId(recipe);
    console.log(recipe);
    this.recipes.push(recipe);
    this.localStorageService.setRecipes(this.recipes);
    
    return recipe;
  }
}
