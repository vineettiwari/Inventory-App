import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { AppRouting } from './app.routing';
import { FoodItemService } from './food-item.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRouting,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ItemDetailComponent
    ],
    providers: [FoodItemService],
    bootstrap: [AppComponent]
})

export class AppModule { }