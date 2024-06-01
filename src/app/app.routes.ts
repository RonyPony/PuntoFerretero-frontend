import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { UserListComponent } from './components/users/list/list.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';

export const appRoutes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'users', component: UserListComponent },
    { path: 'products', component: ProductListComponent }
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