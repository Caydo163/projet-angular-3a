import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { RecipeFormComponent } from '../recipe-form/recipe-form.component';
import { MatCardModule } from '@angular/material/card';
import { Recipe } from '../../models/recipe.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RecipeListComponent, RecipeFormComponent, MatCardModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showRecipeForm: boolean = false;

  showFormRecipe(recipe?: Recipe) {
    this.showRecipeForm = true;    
  }
  
  hideFormRecipe() {
    this.showRecipeForm = false;
  }
}
