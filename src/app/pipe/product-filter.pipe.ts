import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
  //ürün fitreleme işlemi için kullandığım pipe.Method parametre olarak gelen ürünleri ve filtrenelecek metni alıyor
  transform(value: Product[], filterText?: any): Product[] {
    //filtrenelecek metin(ürün ismi) var mı varsa gelen ürün ismini küçük harflere çeviriyorum yoksa boş değer döndürüyorum
    filterText=filterText?filterText.toLocaleLowerCase():null;
    //filtrenelecek metni(ürün ismi) geri değer olarak döndürüyorum
    //Yine filtrenelecek metin(ürün ismi) var mı diye sorguluyorum varsa gelen ürünü filtreliyorum yoksa olan değeri döndürüyorum
    return filterText?value.filter((p:Product)=>p.name.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
