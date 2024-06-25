import { Component } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { IngredientService } from '../../services/ingredient.service';
import { QuantityIngredientDto } from '../../models/dto/quantity-ingredient.dto';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatListModule, CommonModule],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  recipe: Recipe | undefined;
  ingredients: QuantityIngredientDto[] = [];
  
  constructor(
    protected route: ActivatedRoute,
    protected recipeService : RecipeService,
    protected ingredientService : IngredientService
  ) {}
  
  loadIngredients() {
    if (this.recipe && this.recipe.ingredients) { 
      this.recipe.ingredients.forEach(recipeIngredient => {
        const ingredient = this.ingredientService.getIngredientById(recipeIngredient.ingredientId);
        if (ingredient) {
          this.ingredients.push({
            name: ingredient.name,
            quantity: recipeIngredient.quantity
          });
        }
      });
    }
  }
  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    
    this.recipe = this.recipeService.getRecipeById(parseInt(id || '0'));
    this.loadIngredients();
  }
}
