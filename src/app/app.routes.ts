import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';

export const appRoutes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule

    ]
})
export class AppRoutingModule { }