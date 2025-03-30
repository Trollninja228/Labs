from django.contrib import admin
from django.urls import path
from .views import getCategories, getCategoryByID, getProductByID, getProducts, getProductsByCategory

urlpatterns = [
    path('products/', getProducts),
    path('products/<int:id>/', getProductByID),
    path('categories/', getCategories),
    path('categories/<int:id>/', getCategoryByID),
    path('categories/<int:id>/products/', getProductsByCategory),
]
