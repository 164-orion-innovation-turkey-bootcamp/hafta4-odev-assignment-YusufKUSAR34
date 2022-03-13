import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AccountService } from "./account.service";

@Injectable()
export class LoginGuard implements CanActivate{
  constructor(private accountService:AccountService,private router:Router)
  {

  }
  //login işlemi olmadan anasayfaya(homepage) yönlendirmeyen method
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{

    let logged=this.accountService.isLoggedIn();//login sonucunu logged değişkenine gönderiyorum.
   if(logged)//login true gelirse app-rotuing.ts dosyasında anasayfaya yönlendirme durumuna izin veriyorum.
   {
      return true;
   }
    this.router.navigate(["login"]);//account servisden login sonucu true gelmediği durumda loign sayfasına tekrardan yönlendiriyorum
    return false;
  }

}
