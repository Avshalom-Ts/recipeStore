import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Soup Reciep',
      'This is simple soup recipe',
      '/assets/SoupRecipe.png',
      [new Ingredient('Meat', 1), new Ingredient('French Freis', 20)]
    ),
    new Recipe(
      'Amburger Reciep',
      'This is great recipe for testy amburger',
      '/assets/AmburgerRecipe.png',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipe() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
