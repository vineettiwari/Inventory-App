import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';


const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'item-details/:id',
        component: ItemDetailComponent
    },
    {
        path: '**', component: HomeComponent
    }
]

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);