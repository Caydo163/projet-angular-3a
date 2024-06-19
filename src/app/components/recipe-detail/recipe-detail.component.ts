import { Component } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  recipe : Recipe | undefined;
  
  constructor(protected route: ActivatedRoute, protected recipeService : RecipeService) {}
  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    
    this.recipe = this.recipeService.getRecipeById(parseInt(id || '0'));
  }
}
