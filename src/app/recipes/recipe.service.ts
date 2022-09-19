import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Reciep', 'This is simple Test',
            'https://www.acouplecooks.com/wp-content/uploads/2019/11/Recipes-Header-1.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Freis', 20)
            ]),
        new Recipe(
            'Another Test Reciep', 'This is simple Test',
            'https://www.acouplecooks.com/wp-content/uploads/2019/11/Recipes-Header-1.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
    ];
    
    getRecipe() {
        return this.recipes.slice();
    }
}