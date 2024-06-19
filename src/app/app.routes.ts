import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'ingredients', component: HomeComponent},
    {path: 'recipe/:id', component: RecipeDetailComponent},
    {path: 'login', component: HomeComponent},
    {path: 'logout', component: HomeComponent},
];
