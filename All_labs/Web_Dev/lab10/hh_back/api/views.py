from .models import Company,Vacancy
from django.shortcuts import render
from rest_framework import generics,mixins
from .serializer import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view


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
    
class VacanciesByCompany(generics.ListAPIView):
    serializer_class = SerializerVacancy
    def get_queryset(self):
        id = self.kwargs['id']
        return Vacancy.objects.filter(company_id=id)

@api_view(['GET'])

def FBVgetVacancies (request):
    return Response(SerializerVacancyv2(Vacancy.objects.all(),many=True).data) 
    