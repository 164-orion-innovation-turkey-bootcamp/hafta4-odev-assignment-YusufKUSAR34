import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './component/category/category.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { LoginComponent } from './component/login/login.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductComponent } from './component/product/product.component';

import { ShoppingcartComponent } from './component/shoppingcart/shoppingcart.component';
import { SignupComponent } from './component/signup/signup.component';
import { LoginGuard } from './services/login.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, //api login isteği alırsam LoginComponenti baz al diyorum.login sayfaına yönlendir.
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //api herhangi bir  istek gelirse direk anasayfaya yönlendiriyorum.
  { path: 'signup', component: SignupComponent }, //api signup isteği alırsa SignupComponent baz al diyorum.kayıt ol sayfasına yönlendiriyorum
  { path: 'home', component: HomepageComponent ,canActivate: [LoginGuard]}, //, api home diye bir istek gelirse HomepageComponent baz al diyorum.Ana sayfaya yönlendiriyorum.
  //Yalnız anasayfa yönlenebilmesi için canActivate belirttiğim oturum açma işleminin sağlaması gerekiyor.
  //Oturum açılmadan anasayfaya yönlendirmiyorum.
  {
     // api dan kategoriye göre ürünlerin listesi ile ilgili istek alırsam HomeComponenti baz al diyorum.Anasayfaya yönlendiriyorum
    path: 'products/category/:categoryId',component: HomepageComponent,canActivate: [LoginGuard]//
  },
  {
    // api dan ürünlerin listesi  ile ilgili istek alırsam HomeComponenti baz al diyorum.Anasayfaya yönlendiriyorum
    path: 'products', component: HomepageComponent,canActivate: [LoginGuard]
  },
  {
   // api dan alışveriş sepeti  ile ilgili istek alırsam alışveriş sepeti componentini baz al diyorum
    path: 'shopping-cart', component: ShoppingcartComponent
  },
  {
    // api dan ürünlerin detayını ürün idsine göre al isteği alırsam  ürün detay componentini baz al diyorum
    path: 'product-detail/:id', component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
