import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FoodItem } from '../food-item';
import { FoodItemService } from '../food-item.service';


@Component({
    selector: 'app-item-detail',
    styles: [``],
    templateUrl: './app/item-detail/item-detail.component.html'
})

export class ItemDetailComponent implements OnInit, OnDestroy {
    message = 'Welcome to Inventory App - Item Detail page!';
    selectedItem = null;

    private id: number;
    private sub: any;

    constructor(private route: ActivatedRoute, private _foodItemService: FoodItemService) { }

    getSelectedItem() {
        this.selectedItem = this._foodItemService.getFoodItem(this.id - 1);
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
        });

        this.getSelectedItem();
        console.log(this.selectedItem.name);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}