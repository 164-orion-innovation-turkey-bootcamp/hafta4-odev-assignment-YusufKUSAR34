import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comments } from 'src/app/models/comment';
import { Product } from 'src/app/models/product';
import { ProductDetailService } from 'src/app/services/product-detail.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  products!:Product[];//ürünlerin listesini tutan dizi
  comments!:Comments[];//yorumların listesini tutan dizi
  constructor(private activatedRoute: ActivatedRoute,
    private productDetailService:ProductDetailService) { }

  ngOnInit(): void {
    // ürün detay servisinden ürün id sine göre  gelen ürünleri abone olup products dizisine bu verileri aktarıyorum.
    this.activatedRoute.params.subscribe((params) => {
      this.productDetailService
        .getProduct(params['id'])
        .subscribe((data) => {
          console.log(data)
          this.products = data;

        });
    });
// ürün detay servisinden ürün id sine göre  gelen yorumları abone olup comments dizisine bu verileri aktarıyorum.
    this.activatedRoute.params.subscribe((params) => {
      this.productDetailService
        .getComments(params['productId'])
        .subscribe((data) => {
          console.log(data)
          this.comments = data;

        });
    });
  }

}
