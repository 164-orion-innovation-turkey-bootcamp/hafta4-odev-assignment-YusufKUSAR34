import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { User } from '../models/user';

@Injectable()
export class AccountService {
  loggedIn=false;//kullanıcının log in olup olmadığını tuttuğum değişken
  //Http işlemlerini(api işlemlerini) gerçekleştirmek için HttpClient yapıcı metoda enjekte edildi.
  constructor(private http:HttpClient) { }
  path="http://localhost:3000/users";//api tutan değişken
  isLoggedIn()//log in değerini döndüren metod
  {
    return this.loggedIn;
  }
  logOut()//oturum kapatmak için oluşturduğum method
  {
    localStorage.removeItem("isLogged");//local storage da tutulan kullanıcıyı oturum kapatılınca local storage dan siliyorum.
    this.loggedIn=false;//oturum kapatılğını false değeri gönderek sağlıyorum.
  }
  //kullanıcı verilerini çektiğim method
  getUsers():Observable<User[]>
  {
    return this.http.get<User[]>(this.path).pipe(
      //tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)//verileri çekerken hata olması durumunda bu hatayı yakalamamı sağlayan method
    );
  }
  //kullanıcıyı veritabanına(server dosyası içindeki database.json dosyasına) kaydetmemizi sağlayan method
  saveUser(user:User):Observable<User>
  {
     //verilerin kaydedilirken json formatında kaydedilmesini sağlıyorum.
      const httpOptions={
          headers:new HttpHeaders({
                   'Content-Type':'application/json',
                   'Authorization':'Token'
          })
      }
    return  this.http.post<User>(this.path,user,httpOptions).pipe(
      //tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  //verileri çekerken ya da kaydederken hata yakalamamı sağlayan method
  handleError(err: HttpErrorResponse) {
   let errorMessage=''
   if(err.error instanceof ErrorEvent)
   {
errorMessage='Bir hata oluştu'+err.error.message;
   }
   else
   {
     errorMessage='Sistemsel bir hata'
   }
   return throwError(()=>errorMessage);
  }
}
