import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecipeIngredient } from '../../models/recipe-ingredient.model';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Ingredient } from '../../models/ingredient.model';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-ingredient-line-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './ingredient-line-form.component.html',
  styleUrl: './ingredient-line-form.component.css'
})
export class IngredientLineFormComponent {
  @Output() sendIngredient: EventEmitter<RecipeIngredient> = new EventEmitter<RecipeIngredient>();
  @Output() deleteIngredient: EventEmitter<RecipeIngredient> = new EventEmitter<RecipeIngredient>();

  @Input() recipeIngredient?: RecipeIngredient;

  quantity: number = 1;
  selectedIngredient?: number;
  ingredients: Ingredient[] = [{
        id: 1,
        name: "Tomate",
    },
    {
        id: 2,
        name: "Sel",
    }];

  onChange() {
    if (this.recipeIngredient) {
      this.recipeIngredient.ingredientId = this.selectedIngredient || 0;
      this.recipeIngredient.quantity = this.quantity;
      
      this.sendIngredient.emit(this.recipeIngredient);
    }
  }
  
  deleteLine() {
    this.deleteIngredient.emit(this.recipeIngredient);
  }
}
