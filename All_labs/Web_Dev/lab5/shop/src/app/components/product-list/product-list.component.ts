import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItem as ProductItemInterface } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: ProductItemInterface[] = [];
  @Output() deleteProduct = new EventEmitter<number>();

  onRemove(productId: number) {
    this.deleteProduct.emit(productId);
  }
  

}
