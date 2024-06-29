import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Ingredient } from '../../models/ingredient.model';
import { IngredientService } from '../../services/ingredient.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-ingredient-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatButton, MatFormFieldModule, MatInputModule, CommonModule, RouterLink],
  templateUrl: './ingredient-form.component.html',
  styleUrl: './ingredient-form.component.css'
})
export class IngredientFormComponent {
  ingredient: Ingredient = {id: 0, name: ''};
  edit: boolean = false;
  
  ingredientForm: FormGroup = new FormGroup({
    name: new FormControl(this.ingredient.name, [
      Validators.required,
    ]),
  });
  
  constructor(
    private ingredientService: IngredientService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}
  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const ingredient = this.ingredientService.getIngredientById(parseInt(id || '0'));
      if (ingredient) {
        this.edit = true;
        this.ingredient = ingredient;
        this.ingredientForm.setValue({name: this.ingredient.name});
      }
    }
  }
  
  submit() {
    if (this.ingredientForm.invalid) {
      console.error('Ingredient form is invalid');
      return;
    }
    
    if (this.edit) {
      this.ingredientService.updateIngredient(this.ingredient);
    } else { 
      this.ingredientService.addIngredient(this.ingredient);
    }
    this.ingredientForm.reset();
    this.router.navigate(['ingredients']);
  }
}
