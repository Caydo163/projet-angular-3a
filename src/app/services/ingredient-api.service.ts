import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class IngredientApiService {
  private readonly BASE_URL = 'https://664ba07f35bbda10987d9f99.mockapi.io/api';
  
  constructor(private httpClient: HttpClient) {}
  
  getIngredients(): Observable<Ingredient[]> {
    const url = `${this.BASE_URL}/ingredients`;
    return this.httpClient.get<Ingredient[]>(url);
  }
  
  addIngredient(ingredient : Ingredient): void {
    const url = `${this.BASE_URL}/ingredients`;
    this.httpClient.post<Ingredient>(url, ingredient)
      .subscribe(ingredient => console.log('ingredient added', ingredient));
  }
  
  updateIngredient(ingredient : Ingredient): void {
    const url = `${this.BASE_URL}/ingredients/${ingredient.id}`;
    this.httpClient.patch<Ingredient>(url, ingredient)
      .subscribe(ingredient => console.log('ingredient updated', ingredient));
  }
}
