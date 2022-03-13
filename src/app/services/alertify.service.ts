import { Injectable } from '@angular/core';
declare let alertify:any;
@Injectable()
export class AlertifyService {

  constructor() { }
  //işlemlerin başarılı olması durumunda başarılı mesajı vermemi sağlayan  method
  success(message:string)
  {
      alertify.success(message);
  }
   //işlemlerin hatalı olması durumunda  hata mesajı vermemi sağlayan method
  error(message:string)
  {
      alertify.error(message);
  }
   //kullanıcıya uyarı mesajı vereceğim durumunda çalışan method
  warning(message:string)
  {
      alertify.warning(message);
  }
}
