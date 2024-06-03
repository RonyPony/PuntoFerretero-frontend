import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCreateComponent } from './components/category/category-create/category-create.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { CategoryComponent } from './components/category/category.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ProductCreateComponent } from './components/products/product-create/product-create.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductsComponent } from './components/products/products.component';
import { UserCreateComponent } from './components/users/create/create.component';
import { UserListComponent } from './components/users/list/list.component';
import { UsersComponent } from './components/users/users.component';
import { SalesListComponent } from './components/sales/sales-list/sales-list.component';
import { DiscountListComponent } from './components/discounts/discount-list/discount-list.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'listusers', component: UserListComponent },
  { path: 'newuser', component: UserCreateComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'productlist', component: ProductListComponent },
  { path: 'newproduct', component: ProductCreateComponent },
  { path: 'categories', component: CategoryComponent },
  { path: 'newcategory', component: CategoryCreateComponent },
  { path: 'categorylist', component: CategoryListComponent },
  { path: 'sales', component: SalesListComponent },
  { path: 'discounts', component: DiscountListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
