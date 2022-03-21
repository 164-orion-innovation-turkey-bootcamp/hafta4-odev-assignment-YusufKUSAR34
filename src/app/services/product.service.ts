import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Product } from '../models/product';

@Injectable()
export class ProductService {
   //kategori tablomdan gelen ürünleri tutan değişken/ürün api
  path="http://localhost:3000/products";

  constructor(private http:HttpClient) { }
  //httpclient ile ürün api daki ürünleri kategori id ye göre  çekmemi sağlayan methodum
  getProducts(categoryId: any):Observable<Product[]>
  {
     let newPath=this.path;
     if(categoryId)
     {
        newPath=newPath+"?categoryId="+categoryId;
     }
    return this.http.get<Product[]>(newPath).pipe(
      //tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError) //ürün bilgilerini kategori id ye göre çekerken hata olması durumunda hatayı yakalamamı sağlayan method
    );
  }

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
