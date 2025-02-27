import { Component } from '@angular/core';
import { Category } from './models/product.model';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  categories: Category[] = [
    {
      id: 1,
      name: 'Электроника',
      products: [
        { id: 101, name: 'Смартфон', description: 'Современный смартфон', image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=preview-large', likes: 0 , link:'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s15emdCEWliLHyWmsHUNJCNRsx7gsFYX9epwX9Ij7MPfQsxv0PenMwaArDKEALw_wcB ', price:300, isDiscounted:false},
        { id: 102, name: 'Планшет', description: 'Удобный планшет', image: 'https://resources.cdn-kaspi.kz/img/m/p/h20/hd4/84163009151006.jpg?format=preview-large', likes: 0 , link:'https://kaspi.kz/shop/p/xiaomi-redmi-pad-se-11-djuim-8-gb-256-gb-seryi-113758800/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s15emdCEWliLHyWmsHUNJCNRsx7gsFYX9epwX9Ij7MPfQsxv0PenMwaArDKEALw_wcB ', price:500, isDiscounted:false},
        { id: 103, name: 'Ноутбук', description: 'Мощный ноутбук', image: 'https://resources.cdn-kaspi.kz/img/m/p/h58/h61/86274830073886.jpg?format=preview-large', likes: 0 , link:'https://kaspi.kz/shop/p/thunderobot-911-x-wild-hunter-g2-pro-15-6-16-gb-ssd-512-gb-win-11-pro--120386920/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s15emdCEWliLHyWmsHUNJCNRsx7gsFYX9epwX9Ij7MPfQsxv0PenMwaArDKEALw_wcB ', price:400, isDiscounted:false},
        { id: 104, name: 'Камера', description: 'Высококачественная камера', image: 'https://resources.cdn-kaspi.kz/img/m/p/p38/pbb/11569232.jpg?format=preview-large', likes: 0 , link:'https://kaspi.kz/shop/p/sony-zv-e10-kit-16-50mm-chjornyi-102510202/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s15emdCEWliLHyWmsHUNJCNRsx7gsFYX9epwX9Ij7MPfQsxv0PenMwaArDKEALw_wcB ', price:2000, isDiscounted:false},
        { id: 105, name: 'Смарт-часы', description: 'Умные часы', image: 'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=preview-large', likes: 0 , link:'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s15emdCEWliLHyWmsHUNJCNRsx7gsFYX9epwX9Ij7MPfQsxv0PenMwaArDKEALw_wcB ', price:200, isDiscounted:false}
      ]
    },
    {
      id: 2,
      name: 'Одежда',
      products: [
        { id: 201, name: 'Футболка', description: 'Качественная футболка', image: 'https://resources.cdn-kaspi.kz/img/m/p/he1/h30/85913963331614.jpg?format=preview-large', likes: 0 , link:'https://kaspi.kz/shop/p/futbolka-baizhan-chernyi-119002059/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s15emdCEWliLHyWmsHUNJCNRsx7gsFYX9epwX9Ij7MPfQsxv0PenMwaArDKEALw_wcB ', price:100, isDiscounted:false},
        { id: 202, name: 'Джинсы', description: 'Стильные джинсы', image: 'https://resources.cdn-kaspi.kz/img/m/p/h76/h70/87172687724574.jpg?format=preview-large', likes: 0 , link:'https://kaspi.kz/shop/p/dzhinsy-svobodnogo-kroja-denim-temno-seryi-123762294/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s15emdCEWliLHyWmsHUNJCNRsx7gsFYX9epwX9Ij7MPfQsxv0PenMwaArDKEALw_wcB ', price:200, isDiscounted:false},
        { id: 203, name: 'Куртка', description: 'Теплая куртка', image: 'https://resources.cdn-kaspi.kz/img/m/p/p5e/p63/20208963.jpg?format=preview-large', likes: 0 , link:'https://kaspi.kz/shop/p/zimnjaja-kurtka-adidas-chernyi-133461658/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s15emdCEWliLHyWmsHUNJCNRsx7gsFYX9epwX9Ij7MPfQsxv0PenMwaArDKEALw_wcB ', price:40, isDiscounted:false},
        { id: 204, name: 'Обувь', description: 'Модная обувь', image: 'https://resources.cdn-kaspi.kz/img/m/p/h67/h28/86141304668190.jpg?format=preview-large', likes: 0 , link:'https://kaspi.kz/shop/p/krossovki-fashion-belyi-119871130/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s15emdCEWliLHyWmsHUNJCNRsx7gsFYX9epwX9Ij7MPfQsxv0PenMwaArDKEALw_wcB ', price:20, isDiscounted:false},
        { id: 205, name: 'Шляпа', description: 'Стильная шляпа', image: 'https://resources.cdn-kaspi.kz/img/m/p/hc0/h47/85275091173406.jpg?format=preview-large', likes: 0 , link:'https://kaspi.kz/shop/p/shljapa-rmz093-razmer-55-58-korichnevyi-116977503/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s15emdCEWliLHyWmsHUNJCNRsx7gsFYX9epwX9Ij7MPfQsxv0PenMwaArDKEALw_wcB ', price:50, isDiscounted:false}
      ]
    },
    {
      id: 3,
      name: 'Дом и сад',
      products: [
        { id: 301, name: 'Диван', description: 'Комфортная мебель', image: 'https://resources.cdn-kaspi.kz/img/m/p/h9b/h48/86777038274590.png?format=preview-large', likes: 0 , link:'https://kaspi.kz/shop/p/morbido-divan-prjamoi-komfort-obivka-mikroveljur-80h210h80-sm-seryi-109382996/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s15emdCEWliLHyWmsHUNJCNRsx7gsFYX9epwX9Ij7MPfQsxv0PenMwaArDKEALw_wcB ', price:300, isDiscounted:false},
        { id: 302, name: 'Лампа', description: 'Современные светильники', image: 'https://resources.cdn-kaspi.kz/img/m/p/hbf/h24/65627737522206.jpg?format=preview-large', likes: 0 , link:'https://kaspi.kz/shop/p/nastol-naja-lampa-csx515-led-7-vt-plastik-107544331/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s15emdCEWliLHyWmsHUNJCNRsx7gsFYX9epwX9Ij7MPfQsxv0PenMwaArDKEALw_wcB ', price:100, isDiscounted:false},
        { id: 303, name: 'Посуда', description: 'Набор посуды', image: 'https://resources.cdn-kaspi.kz/img/m/p/h16/h03/87001269534750.png?format=preview-large', likes: 0 , link:'https://kaspi.kz/shop/p/serviz-chaino-stolovyi-887080-32-v-1-112066821/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s15emdCEWliLHyWmsHUNJCNRsx7gsFYX9epwX9Ij7MPfQsxv0PenMwaArDKEALw_wcB ', price:150, isDiscounted:false},
        { id: 304, name: 'Кресло', description: 'Мягкое и комфортное', image: 'https://resources.cdn-kaspi.kz/img/m/p/h18/h75/85794226077726.jpg?format=preview-large', likes: 0 , link:'https://kaspi.kz/shop/p/beskarkasnoe-kreslo-prestige-mebel-09-veljur-seryi-116393210/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s15emdCEWliLHyWmsHUNJCNRsx7gsFYX9epwX9Ij7MPfQsxv0PenMwaArDKEALw_wcB ', price:250, isDiscounted:false},
        { id: 305, name: 'Растения', description: 'Живые растения', image: 'https://resources.cdn-kaspi.kz/img/m/p/hea/h60/63516112158750.jpg?format=preview-large', likes: 0 , link:'https://kaspi.kz/shop/p/dratsena-500510-mnogoletnee-40-sm-107024404/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s15emdCEWliLHyWmsHUNJCNRsx7gsFYX9epwX9Ij7MPfQsxv0PenMwaArDKEALw_wcB ', price:30, isDiscounted:false}
      ]
    },
    {
      id: 4,
      name: 'Спорт',
      products: [
        { id: 401, name: 'Мяч', description: 'Спортивный мяч', image: 'https://resources.cdn-kaspi.kz/img/m/p/h86/hef/63852919095326.jpg?format=preview-large', likes: 0 , link:'https://kaspi.kz/shop/p/mikasa-v200w-dlja-voleibola-5-d67-100134795/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s15emdCEWliLHyWmsHUNJCNRsx7gsFYX9epwX9Ij7MPfQsxv0PenMwaArDKEALw_wcB ', price:10, isDiscounted:false},
        { id: 402, name: 'Кроссовки', description: 'Лёгкие кроссовки', image: 'https://resources.cdn-kaspi.kz/img/m/p/he5/h2b/84671932071966.jpg?format=preview-large', likes: 0 , link:'https://kaspi.kz/shop/p/krossovki-fashion-belyi-115202478/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s15emdCEWliLHyWmsHUNJCNRsx7gsFYX9epwX9Ij7MPfQsxv0PenMwaArDKEALw_wcB ', price:30, isDiscounted:false},
        { id: 403, name: 'Спортивная одежда', description: 'Удобная одежда для спорта', image: 'https://resources.cdn-kaspi.kz/img/m/p/h87/hda/80832128909342.png?format=preview-large', likes: 0 , link:'https://kaspi.kz/shop/p/povsednevnyi-kostjum-k-s-mod-zelenyi-110423942/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s15emdCEWliLHyWmsHUNJCNRsx7gsFYX9epwX9Ij7MPfQsxv0PenMwaArDKEALw_wcB ', price:20, isDiscounted:false},
        { id: 404, name: 'Рюкзак', description: 'Прочный рюкзак', image: 'https://resources.cdn-kaspi.kz/img/m/p/h27/h4d/84656597139486.jpg?format=preview-large', likes: 0 , link:'https://kaspi.kz/shop/p/rjukzak-15378081-ids21090702-poliester-oksford-chernyi-109556758/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s15emdCEWliLHyWmsHUNJCNRsx7gsFYX9epwX9Ij7MPfQsxv0PenMwaArDKEALw_wcB ', price:25, isDiscounted:false},
        { id: 405, name: 'Фитнес-браслет', description: 'Устройство для отслеживания активности', image: 'https://resources.cdn-kaspi.kz/img/m/p/h5a/h16/86607711633438.jpg?format=preview-large', likes: 0 , link:'https://kaspi.kz/shop/p/xiaomi-smart-band-9-chernyi-121749494/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s15emdCEWliLHyWmsHUNJCNRsx7gsFYX9epwX9Ij7MPfQsxv0PenMwaArDKEALw_wcB ', price:50, isDiscounted:false}
      ]
    }
  ];

  selectedCategory: Category | null = null;

  selectCategory(category: Category) {
    this.selectedCategory = category;
  }

  removeProduct(productId: number) {
    if (this.selectedCategory) {
      this.selectedCategory.products = this.selectedCategory.products.filter(p => p.id !== productId);
    }
  }
}
