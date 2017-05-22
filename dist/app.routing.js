"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var item_detail_component_1 = require("./item-detail/item-detail.component");
var appRoutes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'about', component: about_component_1.AboutComponent
    },
    {
        path: 'item-details/:id',
        component: item_detail_component_1.ItemDetailComponent
    },
    {
        path: '**', component: home_component_1.HomeComponent
    }
];
exports.AppRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map