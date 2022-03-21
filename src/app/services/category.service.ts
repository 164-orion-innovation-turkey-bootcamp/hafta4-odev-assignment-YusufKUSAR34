import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Category } from '../models/category';

@Injectable()
export class CategoryService {
  //kategori tablomdan gelen kategorileri tutan değişken/kategori api
  path="http://localhost:3000/categories";
  constructor(private http:HttpClient) { }
  //httpclient ile kategori api daki verileri çekmemi sağlayan methodum
  getCategories():Observable<Category[]>
  {
    return this.http.get<Category[]>(this.path).pipe(
      //tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)//verileri çekerken hata varsa bu hatayı yakalamamı sağlayan methodum
    );
  }
  //hata yakalamamı hatanın sebebini gösteren methodum.Bu methodu bir hata servisi yazıp
  //ordan çekmeyi düşündüm fakat vaktim kalmadı:(
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
