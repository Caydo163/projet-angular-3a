import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { IngredientListingComponent } from './components/ingredient-listing/ingredient-listing.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'ingredients', component: IngredientListingComponent},
    {path: 'recipe/:id', component: RecipeDetailComponent},
    {path: 'login', component: HomeComponent},
    {path: 'logout', component: HomeComponent},
];
