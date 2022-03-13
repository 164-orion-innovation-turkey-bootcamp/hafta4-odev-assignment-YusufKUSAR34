import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit,OnDestroy {

   users!:User[];//Kullanıcı verilerini tutan dizi
  constructor(private accountService:AccountService
    ,private router:Router
    ,private alertifyService:AlertifyService) { }
  ngOnDestroy(): void {
    //account servisinden oturum kapatmamızı sağlayan logout fonksiyonu çağrılıyor.
    this.accountService.logOut();
    //alertify servisinden daha güzel uyarı mesajı vermemizi sağlayan warning metodu çağırıyorum.
    this.alertifyService.warning("Oturum sonlandı");
  }

  ngOnInit(): void {
    //sayfa ayağa kaltığı an kullanıcı verileri account servisinden çekiliyor.
    this.accountService.getUsers().subscribe(data=>{
      this.users=data;
  })
}


}
