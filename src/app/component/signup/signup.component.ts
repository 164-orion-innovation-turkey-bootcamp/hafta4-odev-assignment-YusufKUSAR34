import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
   /*
   Yapıcı metoda validation işlemlerini yapılandırmak
   için formbuilder,kullanıcı işlemlerini yöneten accountservice,
   güzel alert mesajları vermek için alertifyService ve diğer sayfalara
   yönlendirme yapmak için router enjekte edildi.
  */
  constructor(
    private formBuilder: FormBuilder,
    private alertifyService: AlertifyService,private accountService:AccountService,
    private router:Router
  ) {}
  signupForm!: FormGroup;
  //validation işlemleriniyöneten fonksiyon
  createSignupForm() {
    this.signupForm = this.formBuilder.group(
      {
        userName: [null, Validators.required],
        email: [null, Validators.required],
        password: [
          null,
          [Validators.required,
          Validators.minLength(4),
          Validators.maxLength(8),
        ]],
        confirmPassword: [null, Validators.required],
      },
      { validator: this.passwordMatchValidator }//kendi yazdığım özel hata mesajı.Aşağıda açıkladım.
    );
  }
/*
    //Bu method şifre doğrulama işlemi yapıyor.
    Kullanıcının girdiği iki şifreyi de karşılaştırıyor.
    html tarafında şifrelerin uyuşmaması durumunda şifreler uyumsuz mesajı veriyor.
*/
  passwordMatchValidator(g:FormGroup)
  {
    return g.get('password')?.value===g.get('confirmPassword')?.value?null:{misMatch:true};
  }
  ngOnInit(): void {
    this.createSignupForm();
  }
  /*
  signUp metodunda accountservisden gelen verilere abone olunup
 formdan gelen verileri veritabanına(server klasörü içindeki database.json dosyasına)
 kaydediyor ve kullanıcıyı sisteme kaydediyor.
   */
  signUp()
  {
        this.accountService.saveUser(this.signupForm.value)
        .subscribe(res=>{
            this.alertifyService.success("Kayıt başarılı bir şekilde yapıldı")//kayıt başarılı olduğuna dair mesaj veriyorum.
            this.signupForm.reset();//forma girilen veriler kayıttan sonra temizleniyor.
            this.router.navigate(['login']);//kayıt gerçekleştikten sonra login sayfasına yönlendiyorum.

        })
  }
}
