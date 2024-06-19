import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatButton} from '@angular/material/button';
import { MatFormFieldModule, MatHint } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { IngredientLineFormComponent } from '../ingredient-line-form/ingredient-line-form.component';
import { RecipeIngredient } from '../../models/recipe-ingredient.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatButton, MatFormFieldModule, MatHint, MatInputModule, MatTableModule, IngredientLineFormComponent, CommonModule],
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.css'
})
export class RecipeFormComponent {
  recipe: Recipe = {id: 0, name: '', description: '', image: '', ingredients: []};
  numberIngredient: number = 1;
  
  recipeForm: FormGroup = new FormGroup({
    name: new FormControl(this.recipe.name, [
      Validators.required,
      Validators.minLength(3),
    ]),
    description: new FormControl(this.recipe.description, [
      Validators.required,
    ]),
    image: new FormControl(this.recipe.image),
  });
  
  constructor(private recipeService: RecipeService) {
  }
  
  addIngredientForm() {
    this.numberIngredient++;
  }
  
  addIngredient(recipeIngredient: RecipeIngredient) {
    this.recipe.ingredients.push(recipeIngredient);
    console.log(this.recipe.ingredients);
  }
  
  handleUpload(event: Event) {
    const file = (event?.target as HTMLInputElement)?.files?.[0];
    if (!file) {
      console.error('No file selected');
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        console.log(reader.result)
        this.recipe.image = reader.result as string;
    };
  }

  submit() {
    const image = this.recipe.image;
    this.recipe = this.recipeForm.value;
    this.recipe.image = image;

    if (this.recipeForm.invalid) {
      console.error('Form is invalid');
      return;
    }
    
    this.recipeService.addRecipe(this.recipe);
    this.recipeForm.reset();
  }
}
