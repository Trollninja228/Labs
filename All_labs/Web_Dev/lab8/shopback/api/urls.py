from django.contrib import admin
from django.urls import path
from views import getProduct

urlpatterns = [
    path('products/', getProduct),
    path('products/', getProduct),
    path('products/', getProduct),
    path('products/', getProduct),
    path('products/', getProduct),
]
