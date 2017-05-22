"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var food_item_service_1 = require("../food-item.service");
var ItemDetailComponent = (function () {
    function ItemDetailComponent(route, _foodItemService) {
        this.route = route;
        this._foodItemService = _foodItemService;
        this.message = 'Welcome to Inventory App - Item Detail page!';
        this.selectedItem = null;
    }
    ItemDetailComponent.prototype.getSelectedItem = function () {
        this.selectedItem = this._foodItemService.getFoodItem(this.id - 1);
    };
    ItemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
        this.getSelectedItem();
        console.log(this.selectedItem.name);
    };
    ItemDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return ItemDetailComponent;
}());
ItemDetailComponent = __decorate([
    core_1.Component({
        selector: 'app-item-detail',
        styles: [""],
        templateUrl: './app/item-detail/item-detail.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, food_item_service_1.FoodItemService])
], ItemDetailComponent);
exports.ItemDetailComponent = ItemDetailComponent;
//# sourceMappingURL=item-detail.component.js.map