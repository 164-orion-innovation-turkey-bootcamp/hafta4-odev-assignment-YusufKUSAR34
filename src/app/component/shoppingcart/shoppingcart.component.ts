import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ShoppingcartService } from 'src/app/services/shoppingcart.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css'],
})
export class ShoppingcartComponent implements OnInit {
  products: any = [];//ürünleri tutan dizi
  public grandTotal!: number;//topmlam ürün fiyatını tutan değişken
  constructor(private shoppingCartService: ShoppingcartService
    ,private alertifyService:AlertifyService) {}

  ngOnInit(): void {
    //alışveriş sepeti servisindeki ürün listesine abone olup
    //gelen ürünleri products dizisine aktarıyorum ve toplam ürün fiyatını grandTotal değişkenine aktarıyorum
    this.shoppingCartService.productList.subscribe((res) => {
      this.products = res;
      this.grandTotal = this.shoppingCartService.getTotalPrice();
    });
  }
  //alışveriş sepetindeki  ürünü silen methodum
  removeProduct(product:any)
  {
       //alışveriş sepeti servisinde ürünü silmemi sağlayan methoda silinecek olan ürünü parametre olarak gönderiyorum
        this.shoppingCartService.removeProductFromShoppingCart(product);
        this.alertifyService.warning("Ürün sepetten silindi"); //ürün silindğine dair mesajı veriyorum
      }
  //alışveriş sepetindeki Tüm ürünleri silmemi sağlayan method
  removeAllProduct()
  {
     //alışveriş sepeti servisinde tüm ürünleri silmemi sağlayacak methodu çağırıyorum
    this.shoppingCartService.removeAllProductFromShoppingCart();
    this.alertifyService.warning("Seçilen tüm ürünler sepetten silindi")
  }
  //ürün satışını yapmamı sağlayan methodum
  productSale()
  {
    //alışveriş sepeti servisindek ürün listesine abone olup gelen ürünleri servisteki ürün satışı sağlayan methoda parametre olarak gönderiyorum
    this.shoppingCartService.productList.subscribe((products) => {

      this.shoppingCartService.saleProduct(products);

    });
    this.alertifyService.success("Satın alma işlemi gerçekleşti.")//satın alma işleminin başarılı olduğuna dair mesaj veriyorum

  }
}
