import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  /*
   Yapıcı metoda validation işlemlerini yapılandırmak
   için formbuilder,kullanıcı işlemlerini yöneten accountservice,
   güzel alert mesajları vermek için alertifyService ve diğer sayfalara
   yönlendirme yapmak için router enjekte edildi.
  */
  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private alertifyService: AlertifyService,
    private router:Router
  ) {}
  //validation işlemleriniyöneten fonksiyon
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }
  ngOnInit(): void {
    this.createLoginForm();
  }
  /*
login metodunda accountservisden gelen verilere abone olunup
 veritabanından gelen email ve şifre verileri form da girilen
 email ve şifre verileri ile eşitse oturum açma işlemi gerçekleşiyor,
 eşit değilse oturum açılmıyor
*/
  login() {
    this.accountService.getUsers().subscribe((res) => {
      const user = res.find((databaseIncomingUser: any) => {
        return (
          databaseIncomingUser.email === this.loginForm.value.email &&
          databaseIncomingUser.password === this.loginForm.value.password
        );
      });
      if (user) {
         this.alertifyService.success("Oturum Başarıyla açıldı");//alertify servisi ile oturum başarılı mesajı verildi.
         this.loginForm.reset();
         this.accountService.loggedIn=true;
         localStorage.setItem("isLogged",user.email);//oturum açılması durumunda local storage oturum açan kişinin mail adresi set edildi.Local storage kullanıcı bilgisi tutuldu.
         this.router.navigate(["home"])//anasayfaya yönlendiriyorum.
         return true;
      }
      else
      {
         this.alertifyService.error("Kullanıcı Bulunamadı.Oturum açılmadı");//oturum açılamadığı durumda verilen mesaj
         return false;
      }
    });
  }



}
