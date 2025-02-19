import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { IngredientListingComponent } from './components/ingredient-listing/ingredient-listing.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AdminGuard } from './guards/admin.guard';
import { IngredientFormComponent } from './components/ingredient-form/ingredient-form.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'ingredients', component: IngredientListingComponent, canActivate: [AdminGuard]},
    {path: 'ingredients/add', component: IngredientFormComponent, canActivate: [AdminGuard]},
    {path: 'ingredients/edit/:id', component: IngredientFormComponent, canActivate: [AdminGuard]},
    {path: 'recipe/:id', component: RecipeDetailComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LogoutComponent},
];
