from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializers import CategorySerializer, ProductSerializer
from .models import Product
from .models import Category
# Create your views here.

@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many= True)
    return Response(serializer.data)

@api_view(['GET'])
def getProductByID(request,id):
    try:
        products = Product.objects.get(id=id)
        serializer = ProductSerializer(products)
        return Response(serializer.data)
    except Product.DoesNotExist:
        return Response({"error":"Product not found"},status=404)


@api_view(['GET'])
def getCategories(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many= True)
    return Response(serializer.data)

@api_view(['GET'])
def getCategoryByID(request,id):
    try:
        category = Category.objects.get(id=id)
        serializer = CategorySerializer(category)
        return Response(serializer.data)
    except Category.DoesNotExist:
        return Response({"error":"Category not found"},status=404)
    
@api_view(['GET'])
def getProductsByCategory(request,id):
    try:
        category = Category.objects.get(id=id)
        products = category.products.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    except Category.DoesNotExist:
        return Response({"error":"Category not found"},status=404)