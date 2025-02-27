import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItem as ProductItemInterface } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: ProductItemInterface;
  @Output() remove = new EventEmitter<number>();

  likeProduct() {
    this.product.likes++;
  }

  removeProduct() {
    this.remove.emit(this.product.id);
  }
  Discount(){
    if(this.product.isDiscounted){
      this.product.price/=0.8;
      this.product.isDiscounted=false;
    }else{
      this.product.price*=0.8;
      this.product.isDiscounted=true;
    }
    
  }
}
