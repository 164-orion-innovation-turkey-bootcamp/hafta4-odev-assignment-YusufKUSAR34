import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AccountService } from './services/account.service';
import { AlertifyService } from './services/alertify.service';

import { ShoppingcartService } from './services/shoppingcart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Registration';
  constructor(
    private accountService: AccountService,
    private alertifyService: AlertifyService,
    private shoppingCartService: ShoppingcartService
  ) {}
  totalProductNumber:number=0;//ürün sayısını tutan değişken
  ngOnInit(): void {
    //alışveriş sepetine eklenen ürünlerin listesine abone olup ordaki ürünlerin sayısını sepete aktarıyorum
    this.shoppingCartService.productList.subscribe((res) => {
      this.totalProductNumber = res.length;
    });
  }


  isLoggedin() {
    return this.accountService.isLoggedIn();
  }
  logOut() {
    this.alertifyService.warning('Oturum sonlandı');
    return this.accountService.logOut();
  }
}
