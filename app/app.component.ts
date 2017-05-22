import { Component } from '@angular/core';
import { FoodItem } from './food-item';


@Component({
    selector: 'inventory-app',
    styles: [` `],
    templateUrl: './app/app.component.html'
})

export class AppComponent {
    message = 'Welcome to Inventory App!';
}