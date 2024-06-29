import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { OrderService } from '../../services/order.service';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, RouterLink],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent {
  @Input() name?: string = 'Name';
  @Input() description?: string = 'Voluptatum veritatis quia molestiae commodi magnam voluptatem dolor numquam quo. Molestiae possimus omnis quo libero tenetur quasi. Sint inventore suscipit voluptas et blanditiis laudantium ut quos esse. Qui placeat quam delectus qui reprehenderit in. Ex qui non sed itaque est. Laboriosam sit ut velit placeat quia perspiciatis.';
  @Input() image?: string;
  @Input() id?: number;
  
  constructor(
    protected orderService: OrderService,
    protected recipeService: RecipeService,
  ) {}
  
  order() {
    const recipe: Recipe|undefined = this.recipeService.getRecipeById(this.id || 0);
    if (!recipe) {
      return;
    }

    this.orderService.addOrder(recipe);
  }
}
