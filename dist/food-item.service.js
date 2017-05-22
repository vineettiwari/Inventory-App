"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FOODITEMS = [
    {
        id: 1,
        name: "Cucumbers",
        mfg: "Hot House",
        pkg: "10 KG",
        qty: 6
    },
    {
        id: 2,
        name: "Carrots",
        mfg: "Hot House",
        pkg: "8 KG",
        qty: 14
    },
    {
        id: 3,
        name: "Cheese",
        mfg: "Hot House",
        pkg: "5 KG",
        qty: 20
    },
    {
        id: 4,
        name: "French Fries",
        mfg: "McCain",
        pkg: "15 KG",
        qty: 8
    }
];
var FoodItemService = (function () {
    function FoodItemService() {
        this.foodItems = FOODITEMS;
    }
    FoodItemService.prototype.getAllFoodItems = function () {
        return this.foodItems;
    };
    FoodItemService.prototype.getFoodItem = function (index) {
        console.log(this.foodItems[index]);
        return this.foodItems[index];
    };
    return FoodItemService;
}());
FoodItemService = __decorate([
    core_1.Injectable()
], FoodItemService);
exports.FoodItemService = FoodItemService;
//# sourceMappingURL=food-item.service.js.map