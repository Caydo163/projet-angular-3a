import { RecipeIngredient } from "./recipe-ingredient.model";

export interface Recipe {
    id: number,
    name: string,
    description: string,
    image: string,
    ingredients: RecipeIngredient[],
}
