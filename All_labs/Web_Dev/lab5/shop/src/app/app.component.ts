import { Component, OnInit } from '@angular/core';
import { CategoryService, Category } from './category.service';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component'; // Компонент для отображения продуктов

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  categories: Category[] = [];
  selectedCategory: any = null;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      console.log('получи, категории', data)
      this.categories = data;
    });
  }

  selectCategory(category: Category): void {
    this.selectedCategory = category;
  }
}
