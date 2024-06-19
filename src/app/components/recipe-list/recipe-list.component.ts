import { Component } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { RecipeService } from '../../services/recipe.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [MatPaginatorModule, RecipeCardComponent, CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [];
  recipesNumber ?: number;
  currentPage : number = 1;
  pageSize : number = 5;
  
  constructor(
    protected recipeService: RecipeService
  ) {
  }
  
  loadRecipes() {
    this.recipesNumber = this.recipeService.getRecipesNumber();
    this.recipes = this.recipeService.getByPage(this.currentPage, this.pageSize);
    console.log(this.recipes);
  }
  
  ngOnInit() {
    this.loadRecipes();
  }
  
  pageChanged(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadRecipes();
  }
}
