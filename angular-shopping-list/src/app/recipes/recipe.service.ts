import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

// We add @Injectable to inject a service into another service, so you will be able to add it in the constructor
@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super tasty Schnitzel - Just awesome!',
      // tslint:disable-next-line: max-line-length
      'https://www.thespruceeats.com/thmb/LeyN-7W9T0KB2nl6pcuDZckHnjc=/4288x2848/filters:fill(auto,1)/wiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),

    new Recipe(
      'Big Fat Burguer',
      'What else you need to say?',
      // tslint:disable-next-line: max-line-length
      'https://www.thespruceeats.com/thmb/EsAJdXE_40F6OqK1x8wzhHUXdtQ=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/luther-burger-doughnut-bacon-cheeseburger-4018810-hero-01-6fe92cf3005f4585bc2ff361a048b5f7.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
