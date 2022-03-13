import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { LoginGuard } from './services/login.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},//api login isteği alırsam LoginComponenti baz al diyorum.login sayfaına yönlendir.
  {path:'',redirectTo:'home',pathMatch:'full'},//api herhangi bir  istek gelirse direk anasayfaya yönlendiriyorum.
  {path:'signup',component:SignupComponent},//api signup isteği alırsa SignupComponent baz al diyorum.kayıt ol sayfasına yönlendiriyorum
  {path:'home',component:HomepageComponent,canActivate:[LoginGuard]}//api home diye bir istek gelirse HomepageComponent baz al diyorum.Ana sayfaya yönlendiriyorum.
                                                                    //Yalnız anasayfa yönlenebilmesi için canActivate belirttiğim oturum açma işleminin sağlaması gerekiyor.
                                                                    //Oturum açılmadan anasayfaya yönlendirmiyorum.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
