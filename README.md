# Registration

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

<h1 align="center">Angular E-ticaret Web Uygulaması</h1>


<h3 align="center">Diller ve Araçlar:</h3>
<p align="center"> <a href="https://angular.io" target="_blank" rel="noreferrer"> <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="40" height="40"/> </a> <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a></a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a>

## Kullanılan Paketler ve Modüller
- AppRoutingModule
- HttpClientModule
- FormsModule
- ReactiveFormsModule
- Font Awesome
- Bootstrap 5
- LoginGuard!


## Ön Koşullar
- JSON Api
- npm
- Angular 13
- Bootstrap 5
- Vs Code

## Video
[ecommerce](https://user-images.githubusercontent.com/96016754/159349129-719ce162-d194-468e-8ea5-29932abb5c8d.JPG)(https://youtu.be/JoTaPsKyvg4 )
 
 
 
## Proje adımları
1. server diye bir klasör oluşturdum.İçinde database.json dosyamı oluşturdum.Bu dosya veri tabanı bilgilerimizi(ürün,kategori,kullanıcı,satış,yorum listesi) tutan dosyamız.Bu dosyanın çalışması için (npm run server) komutunu çalıştırmamız yeterli.
2. Projeye eklediğim teknolojiler bootstrap,alertify(alert mesajları için).
3. app klasörü içinde componentlerimi tuttuğum component klasörü oluşturdum.
--component klasörü içinde kullanıcının kayıt olmasını sağlayan signup componenti,
kullanıcının oturum açmasını sağlayan login componenti ve kullanıcının oturum açdıktan sonra yönlendirdiğim homepage(anasayfa) componenti,kategorileri listelediğim category componenti,ürünleri listediğim product componenti,ürünlerin detayını ve yorumlarını listelediğim product-detail componenti,alışveriş sepetinde ürünleri listelediğim,sildiğim shoppingcart componenti var.Kullanıcı kaydolmadan oturum açamıyor.
4. Veri tabanı modelini oluşturduğum user class'ını,category class'ını,product class'ını ve comment class'ını models adlı bir klasörün içinde oluşturdum.
5. Ürünleri filtrelemek için product-filter adında özel bir pipe yazdım.Bu custom pipe
ürünleri ürün ismine göre filtreliyor.
6. app klasörü içinde servislerimi tuttuğum services klasörü oluşturdum.
-- Bu klasör içindeki account.service  kullanıcının oturum açma,kapatma,kullanıcı verilerini çekme,kullanıcı bilgilerini kaydetme işlemlerini yönettiğim servistir. 
-- Bu klasör içindeki alertify.service kullanıcının kaydolma ve oturum açma işlemlerini gerçekleştirirken bilgi mesajlarını(başarı,hata,uyarı mesajları) verdiğim servistir.
-- Bu klasör içindeki login.guard service kullanıcının oturum açtıktan sonra anasayfaya yönlendirilmesini sağladığım servistir.
-- Bu klasör içindeki category.service json formatından dönen kategori verilerini çektiğim servistir.
-- Bu klasör içindeki product.service json formatından dönen ürün verilerini kategori id ye göre çektiğim servistir.
-- Bu klasör içindeki product-detail.service json formatından dönen ürün verilerini ürün idy e çektiğim  ve  json formatından dönen yorum verilerini ürün id ye göre çektiğim servistir.
-- Bu klasör içindeki shoppingcart.service json formatından dönen ürün verilerini alışveriş sepetine eklememi,alışveriş sepetinden silmemi ve ürün satışını yapmamı sağlayan durumları yönetmemi sağlayan servistir.

