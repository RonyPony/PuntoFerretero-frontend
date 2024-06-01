import { NgModule } from "@angular/core";
import { MenuComponent } from "./components/menu/menu.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routes";

@NgModule({

    declarations: [
        AppComponent,
        MenuComponent,
        LandingPageComponent
    ],

    imports: [
        AppRoutingModule,
        MenuComponent
    ],

    providers: [],

    bootstrap: [],
})

export class AppModule {
}