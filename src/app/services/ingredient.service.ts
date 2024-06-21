import { Injectable } from '@angular/core';
import { INGREDIENTS } from '../data/ingredient.stub';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  public ingredients : Ingredient[] = []

  constructor(
  ) {
    this.ingredients = INGREDIENTS;
  }

  getAll(): Ingredient[] {
    return this.ingredients;
  }
}
