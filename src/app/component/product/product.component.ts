import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingcartService } from 'src/app/services/shoppingcart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService],
})
export class ProductComponent implements OnInit {
  products!: Product[];
  filterText = '';
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private shoppingCartService: ShoppingcartService,
    private alertifyService: AlertifyService
  ) {}
  totalnumber: number = 0;
  ngOnInit(): void {
    // Product Servisten gelen veriye abone olup categoryId göre ürünleri listeliyorum
    this.activatedRoute.params.subscribe((params) => {
      this.productService
        .getProducts(params['categoryId'])
        .subscribe((data) => {
          this.products = data;//gelen veriyi ürünler dizisine aktarıyorum.

        });
    });
  }
// Alışveriş Sepetine ürünü eklememi sağlayan fonksiyon
  addShoppingCart(product: any) {
    //Alışveriş sepeti servisini çağırıp gelen ürün değerini bu servise gönderip alışveriş sepetine verinin eklenmesini sağlıyorum.
    this.shoppingCartService.addToShoppingCart(product);
//ürün sepete eklendiğinde başarılı eklendiğine dair mesajı veriyorum
    this.alertifyService.success('Ürün sepete eklendi.');
  }
}
