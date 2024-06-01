import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { UserListComponent } from './components/users/list/list.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { SalesListComponent } from './components/sales/sales-list/sales-list.component';
import { DiscountListComponent } from './components/discounts/discount-list/discount-list.component';
import { UserCreateComponent } from './components/users/create/create.component';
import { UsersComponent } from './components/users/users.component';

export const appRoutes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'users', component: UsersComponent },
    { path: 'newuser', component: UserCreateComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'categories', component: CategoryListComponent },
    { path: 'sales', component: SalesListComponent },
    { path: 'discounts', component: DiscountListComponent },

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