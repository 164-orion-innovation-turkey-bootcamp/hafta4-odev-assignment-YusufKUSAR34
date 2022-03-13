# Registration

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Proje adımları
1. server diye bir klasör oluşturdum.İçinde database.json dosyamı oluşturdum.Bu dosya veri tabanı bilgilerimizi tutan dosyamız.Bu dosyanın çalışması için (npm run server) komutunu çalıştırmamız yeterli.
2. Projeye eklediğim teknolojiler bootstrap,alertify(alert mesajları için).
3. app klasörü içinde componentlerimi tuttuğum component klasörü oluşturdum.
component klasörü içinde kullanıcının kayıt olmasını sağlayan signup componenti,
kullanıcının oturum açmasını sağlayan login componenti ve kullanıcının oturum açdıktan sonra yönlendirdiğim homepage(anasayfa) componenti var.Kullanıcı kaydolmadan oturum açamıyor.
4. Veri tabanı modelini oluşturduğum user class'ını models adlı bir klasörün içinde oluşturdum.
5. app klasörü içinde servislerimi tuttuğum services klasörü oluşturdum.
-- Bu klasör içindeki accountservice  kullanıcının oturum açma,kapatma,kullanıcı verilerini çekme,kullanıcı bilgilerini kaydetme işlemlerini yönettiğim servistir. 
-- Bu klasör içindeki alertifyservice kullanıcının kaydolma ve oturum açma işlemlerini gerçekleştirirken bilgi mesajlarını(başarı,hata,uyarı mesajları) verdiğim servistir.
-- Bu klasör içindeki loginguard service kullanıcının oturum açtıktan sonra anasayfaya yönlendirilmesini sağladığım servistir.
