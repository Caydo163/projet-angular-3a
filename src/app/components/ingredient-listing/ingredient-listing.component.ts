import { Component } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';
import { Ingredient } from '../../models/ingredient.model';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ingredient-listing',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './ingredient-listing.component.html',
  styleUrl: './ingredient-listing.component.css'
})
export class IngredientListingComponent {
  displayedColumns: string[] = ['id', 'name', 'actions'];
  ingredients:Ingredient[] = [];
  
  constructor(
    private ingredientService: IngredientService
  ) {
  }
  
  ngOnInit() {
    this.ingredients = this.ingredientService.getAll();
  }
}
