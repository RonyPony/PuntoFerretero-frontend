import { NgModule } from "@angular/core";
import { MenuComponent } from "./components/menu/menu.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routes";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({

    declarations: [
        AppComponent,

        MenuComponent,
        LandingPageComponent
    ],

    imports: [
        AppRoutingModule,
        MenuComponent,
        FormsModule
    ],

    providers: [],

    bootstrap: [],
})

export class AppModule {
}