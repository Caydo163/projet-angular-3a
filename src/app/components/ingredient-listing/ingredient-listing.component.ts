import { Component } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';
import { Ingredient } from '../../models/ingredient.model';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-ingredient-listing',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule, RouterLink, MatPaginatorModule],
  templateUrl: './ingredient-listing.component.html',
  styleUrl: './ingredient-listing.component.css'
})
export class IngredientListingComponent {
  displayedColumns: string[] = ['id', 'name', 'actions'];
  ingredients:Ingredient[] = [];
  ingredientsNumber ?: number;
  currentPage : number = 0;
  pageSize : number = 10;
  
  constructor(
    private ingredientService: IngredientService
  ) {
  }
  
  loadRecipes() {
    this.ingredientsNumber = this.ingredientService.getIngredientsNumber();
    this.ingredients = this.ingredientService.getByPage(this.currentPage, this.pageSize);
  }
  
  ngOnInit() {
    this.loadRecipes();
  }
  
  ngOnChange() {
    this.loadRecipes();
  }
  
  pageChanged(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadRecipes();
  }
}
