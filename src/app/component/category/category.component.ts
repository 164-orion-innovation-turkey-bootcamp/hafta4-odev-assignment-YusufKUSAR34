import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';

import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService],
})
export class CategoryComponent implements OnInit {
  categories!: Category[];//Category Service den gelen verileri tutan dizi
  constructor(private categoryService: CategoryService) {}


  ngOnInit(): void {
    //Category Service den gelen verilere abone olup verileri categories dizisi içine gönderiyorum
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
