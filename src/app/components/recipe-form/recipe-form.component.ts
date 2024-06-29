import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() submitRecipe: EventEmitter<void> = new EventEmitter<void>();
  
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
  
  ngOnInit() {
    this.addIngredientForm();
  }
  
  private getMaxRecipeIngredientId() {
    if (this.recipe.ingredients.length === 0) {
      return 0;
    }
    return Math.max(...this.recipe.ingredients.map(x => x.id));
  }
  
  addIngredientForm() {
    const id = this.getMaxRecipeIngredientId()+1;
    this.recipe.ingredients.push({id: id, ingredientId: 0, recipeId: 0, quantity: 1});
  }
  
  updateIngredient(recipeIngredient: RecipeIngredient) {
    let ingredient = this.recipe.ingredients.find(x => x.id === recipeIngredient.id);
    ingredient = recipeIngredient;
  }
  
  deleteIngredient(recipeIngredient: RecipeIngredient) {
    const index = this.recipe.ingredients.findIndex(x => x.id === recipeIngredient.id);
    this.recipe.ingredients.splice(index, 1);
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
      this.recipe.image = reader.result as string;
    };
  }

  submit() {
    if (this.recipeForm.invalid) {
      console.error('Form is invalid');
      return;
    }

    const formValue = this.recipeForm.value;
    this.recipe.name = formValue.name;
    this.recipe.description = formValue.description;

    this.recipeService.addRecipe(this.recipe);
    this.recipeForm.reset();
    this.recipe.ingredients = [];
    this.close();
  }
  
  close() {
    this.submitRecipe.emit();
  }
}
