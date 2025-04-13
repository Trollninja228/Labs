from django.contrib import admin
from django.urls import path
from .views import *


urlpatterns = [
    path('Universities/', getUniversities.as_view()),
    path('Universities/<int:pk>/', RUDUniversity.as_view()),
    path('Universities/<int:id>/Interships/', getIntershipsInUniversity.as_view()),
    path('Interships/', getInterships.as_view()),
    path('Interships/<int:pk>/', RUDInterships.as_view()),
    path('Interships/topTen/', topTen.as_view()),
]
