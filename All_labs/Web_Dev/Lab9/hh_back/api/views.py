from .models import Company,Vacancy
from django.shortcuts import render
from rest_framework import generics,mixins
from .serializer import SerializerCompany,SerializerVacancy
from rest_framework.views import APIView
# Create your views here.


class getCompaniesRUD (generics.RetrieveUpdateDestroyAPIView):
    lookup_field="id"
    queryset=Company.objects.all()
    serializer_class =  SerializerCompany

class getVacancyRUD (generics.RetrieveUpdateDestroyAPIView):
    lookup_field="id"
    queryset=Vacancy.objects.all()
    serializer_class =  SerializerVacancy

class getVacancies (generics.ListAPIView):
    queryset=Vacancy.objects.all()
    serializer_class =  SerializerVacancy

class getCompanies (generics.ListAPIView):
    queryset=Company.objects.all()
    serializer_class =  SerializerCompany

class getTop10Vacancies (generics.ListAPIView):
    queryset=Vacancy.objects.order_by('-salary')[:10]
    serializer_class =  SerializerVacancy
    