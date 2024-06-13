import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent {
  @Input() name?: string = 'Name';
  @Input() description?: string = 'Voluptatum veritatis quia molestiae commodi magnam voluptatem dolor numquam quo. Molestiae possimus omnis quo libero tenetur quasi. Sint inventore suscipit voluptas et blanditiis laudantium ut quos esse. Qui placeat quam delectus qui reprehenderit in. Ex qui non sed itaque est. Laboriosam sit ut velit placeat quia perspiciatis.';
  @Input() image?: string;
}
