import { NgModule } from "@angular/core";
import { MenuComponent } from "./components/menu/menu.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routes";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { CategoryListComponent } from "./components/category/category-list/category-list.component";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { UserListComponent } from "./components/users/list/list.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({

    declarations: [
        AppComponent,
        CategoryListComponent
    ],

    imports: [
        FormsModule,
        BrowserModule,
        CommonModule,
        RouterOutlet,
        MenuComponent,
        UserListComponent,
        AppRoutingModule,
        HttpClientModule
    ],

    providers: [
    ],

    bootstrap: [
        AppComponent
    ],
})

export class AppModule {
}