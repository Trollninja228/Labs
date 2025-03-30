from django.contrib import admin
from .models import Product, Category  # Импортируем модели

admin.site.register(Product)
admin.site.register(Category)