import { Component } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';
import { Ingredient } from '../../models/ingredient.model';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-ingredient-listing',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './ingredient-listing.component.html',
  styleUrl: './ingredient-listing.component.css'
})
export class IngredientListingComponent {
  displayedColumns: string[] = ['id', 'name'];
  ingredients:Ingredient[] = [];
  
  constructor(
    private ingredientService: IngredientService
  ) {
  }
  
  ngOnInit() {
    this.ingredients = this.ingredientService.getAll();
  }
}
