import { Component } from '@angular/core';
import { Product} from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  encodeURIComponent = encodeURIComponent;
  products: Product[] = [
    {
      id: 1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb8/h19/86042949648414.png?format=preview-large',
      name: 'Смартфон Apple iPhone 14',
      description: 'Современный смартфон с мощным процессором и отличной камерой.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb8/h19/86042949648414.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/h4b/86042949681182.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd4/h92/86042949746718.png?format=gallery-medium'
      ]
    },
    {
      id: 2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h58/h61/86274830073886.jpg?format=preview-large',
      name: 'ThundeRobot 911 X Wild Hunter G2 Pro 15.6" / 16 Гб / SSD 512 Гб',
      description: 'Современный ноутбук с мощным процессором и видеокартой.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/thunderobot-911-x-wild-hunter-g2-pro-15-6-16-gb-ssd-512-gb-win-11-pro--120386920/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h58/h61/86274830073886.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h39/hca/86274830139422.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb5/hb9/86274830204958.jpg?format=gallery-medium'
      ]
    },
    {
      id: 3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he6/hfd/64506820984862.jpg?format=preview-large',
      name: 'Apple MacBook Air 13 2022 13.6" / 8 Гб / SSD 256 Гб / macOS /',
      description: 'Лучший ноутбук для работы и учебы.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mly33-105933768/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/he6/hfd/64506820984862.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h90/h16/64506823475230.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hdc/h82/64506826293278.jpg?format=gallery-medium'
      ]
    },
    {
      id: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h81/79480589418526.jpg?format=preview-large',
      name: 'Wireless Mouse черный',
      description: 'Мышь для ноутбука или компьютера.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/wireless-mouse-chernyi-109619826/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h81/79480589418526.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h39/h6a/79480589680670.jpg?format=gallery-medium'
      ]
    },
    {
      id: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa2/p88/24867880.jpg?format=preview-large',
      name: 'CROWN CMKG-403 черный',
      description: 'Многофункциональная клавиатура',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/crown-cmkg-403-chernyi-9200416/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/pa2/p88/24867880.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he0/h31/63769168936990.jpg?format=gallery-medium'
      ]
    },
    {
      id: 6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p43/pe6/6773907.jpg?format=preview-large',
      name: 'Riverside Full Moon 900x400x3 мм рисунок',
      description: 'Коврик для мыши с красивым рисунком.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/riverside-full-moon-900x400x3-mm-risunok-129560502/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/p43/pe6/6773907.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p27/pe6/6773908.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0b/pe6/6773909.jpg?format=gallery-medium'
      ]
    },
    {
      id: 7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h61/hdf/86364186804254.png?format=preview-large',
      name: 'Samsung LS27B610EQIXCI черный',
      description: 'Игровой монитор с высоким разрешением.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/samsung-ls27b610eqixci-chernyi-105605596/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h61/hdf/86364186804254.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h72/h2b/86364186837022.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd4/h40/86364186869790.png?format=gallery-medium'
      ]
    },
    {
      id: 8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6c/h26/64041479831582.jpg?format=preview-large',
      name: 'Logitech StreamCam',
      description: 'Камера для стриминга и видеозвонков.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/logitech-streamcam-100549048/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h6c/h26/64041479831582.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h48/h50/64041483304990.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0d/h46/64041486254110.jpg?format=gallery-medium'
      ]
    },
    {
      id: 9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h80/hc6/63936669810718.jpg?format=preview-large',
      name: 'Kingston DataTraveler Exodia DTX/64GB 64 Гб',
      description: 'Флешка с большим объемом памяти.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/kingston-datatraveler-exodia-dtx-64gb-64-gb-100759959/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h80/hc6/63936669810718.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h8d/h23/63936672923678.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h08/hb2/63936675446814.jpg?format=gallery-medium'
      ]
    },
    {
      id: 10,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h18/hbe/86158237270046.png?format=preview-large',
      name: 'Видеокарта GIGABYTE GeForce RTX 3050 Windforce OC GV-N3050WF2OC-6GD 6 Гб',
      description: 'Мощная видеокарта для игр и видеомонтажа.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/gigabyte-geforce-rtx-3050-windforce-oc-gv-n3050wf2oc-6gd-6-gb-119935068/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h18/hbe/86158237270046.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h56/hb5/86158237335582.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h34/h73/86158237532190.png?format=gallery-medium'
      ]
    }
  ];
  array1: Product[]=[
    this.products[0],
    this.products[1],
    this.products[2],
    this.products[3],
    this.products[4],
  ]

  array2:Product[]=[
    this.products[5],
    this.products[6],
    this.products[7],
    this.products[8],
    this.products[9],
  ]
  
}
