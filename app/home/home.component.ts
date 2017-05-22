import { Component } from '@angular/core';
import { FoodItem } from '../food-item';
import { FoodItemService } from '../food-item.service';


@Component({
    selector: 'app-home',
    styles: [` `],
    templateUrl: './app/home/home.component.html'
})

export class HomeComponent {
    
    constructor(private _foodItemService: FoodItemService) { }

    foodItems: FoodItem[] = this._foodItemService.getAllFoodItems();
}