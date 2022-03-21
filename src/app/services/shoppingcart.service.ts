import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';

import { Product } from '../models/product';

@Injectable(
  {
    providedIn: 'root',
  }
)
export class ShoppingcartService {
  //satış tablomdan gelen satışları tutan değişken/satış api
  path="http://localhost:3000/sales";
 public shoppingCartProductList:any=[];//alışveriş sepeti ürün listesini tutan dizi
 public productList=new BehaviorSubject([]);// tek bir yapı ile componentlerin abone olması sağlayan ürün listesinin tuttuğum subject
  constructor(private http:HttpClient) { }
  //ürünleri listeleyen methodum
  getProducts()
  {

    return this.productList.asObservable();
  }
//ürünleri alışveriş sepeti ürün listesine ve ürün listesine set eden methodum
  setProduct(product:any)
  {
      this.shoppingCartProductList.push(...product);
      this.productList.next(product);
  }
//ürünleri alış veriş sepetine eklememi sağlayan methodum
  addToShoppingCart(product:Product)
  {
        this.shoppingCartProductList.push(product);
        this.productList.next(this.shoppingCartProductList)
        this.getTotalPrice();
  }

//alışveriş sepetindeki toplam fiyatı hesaplayan methodum
  getTotalPrice():number
  {
    let grandTotal=0;
    this.shoppingCartProductList.map((a:any)=>{
          grandTotal+=a.price;
    })
    return grandTotal;
  }
  //alışveriş sepetindeki ürünü silmemi sağlayan methodum.
  removeProductFromShoppingCart(product:any)
  {
          this.shoppingCartProductList.map((productInTheShoppingCart:any,index:any)=>{
                    if(product.id===productInTheShoppingCart.id){
                      this.shoppingCartProductList.splice(index,1);
                    }
          })
          this.productList.next(this.shoppingCartProductList);

  }
  //alışveriş sepetindeki tüm ürünleri  silmemi sağlayan methodum.
  removeAllProductFromShoppingCart()
  {
    this.shoppingCartProductList=[];
    this.productList.next(this.shoppingCartProductList);
  }
  //alışveriş sepetindeki ürünlerin satışını yapmamı sağlayan methodum sağlayan methodum.
  saleProduct(product:Product[]):Observable<Product[]>
  {
      const httpOptions={
          headers:new HttpHeaders({
                  'Content-Type':'application/json',
                  'Authorization':'Token'
          })
      }
    return  this.http.post<Product[]>(this.path,product,httpOptions).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
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
