import { Component } from '@angular/core';
import { ProductItem} from '../../models/product.model';
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
  
  
}
