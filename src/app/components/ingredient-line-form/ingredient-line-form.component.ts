import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { RecipeIngredient } from '../../models/recipe-ingredient.model';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Ingredient } from '../../models/ingredient.model';

@Component({
  selector: 'app-ingredient-line-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule],
  templateUrl: './ingredient-line-form.component.html',
  styleUrl: './ingredient-line-form.component.css'
})
export class IngredientLineFormComponent {
  @Output() sendIngredient: EventEmitter<RecipeIngredient> = new EventEmitter<RecipeIngredient>();
  recipeIngredient: RecipeIngredient = {recipeId: 0, ingredientId: 0, quantity: 1};
  quantity: number = 1;
  selectedIngredient?: Ingredient;
  ingredients: Ingredient[] = [{
        id: 1,
        name: "Tomate",
    },
    {
        id: 2,
        name: "Sel",
    }];

  onChange() {
    this.recipeIngredient.ingredientId = this.selectedIngredient?.id || 0;
    this.recipeIngredient.quantity = this.quantity;
    
    this.sendIngredient.emit(this.recipeIngredient);
  }
}
