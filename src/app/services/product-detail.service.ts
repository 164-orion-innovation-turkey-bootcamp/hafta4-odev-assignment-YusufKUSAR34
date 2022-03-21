import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comments } from '../models/comment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {
  //ürün tablomdan gelen verileri tutan değişken/ürün api
  path="http://localhost:3000/products";
   //yorum tablomdan gelen verileri tutan değişken/yorum api
  path2="http://localhost:3000/comments"
  constructor(private http:HttpClient) { }
  //httpclient ile ürün api daki ürünleri gelen ürün id sine göre çekmemi sağlayan methodum
  getProduct(productId: any):Observable<Product[]>
  {
     let newPath=this.path;
     if(productId)
     {
        newPath=newPath+"?id="+productId;
     }
    return this.http.get<Product[]>(newPath).pipe(
      //tap(data=>console.log(JSON.stringify(data))),

    );
  }
  //httpclient ile yorum api daki yorumları gelen ürün id sine göre çekmemi sağlayan methodum
  //hangi ürüne yorum yapılmış o ürünün idsine göre yorumları çekiyorum.
  getComments(productId: any):Observable<Comments[]>
  {
     let newPath=this.path2;
     if(productId)
     {
        newPath=newPath+"?productId="+productId;
     }
    return this.http.get<Comments[]>(newPath).pipe(
      //tap(data=>console.log(JSON.stringify(data))),

    );
  }
}
