from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import generics,request
from rest_framework.decorators import api_view
from rest_framework.views import Response
from .models import *
from .serializers import *
# Create your views here.


class getUniversities(generics.ListAPIView):
    serializer_class=serializerUniversity
    queryset=University.objects.all()

class RUDUniversity(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=serializerUniversity
    queryset=University.objects.all()

class getInterships(generics.ListAPIView):
    serializer_class=serializerIntership
    queryset=Intership.objects.all()

class RUDInterships(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=serializerIntership
    queryset=Intership.objects.all()

class getIntershipsInUniversity(generics.ListAPIView):
    serializer_class=serializerIntership
    def get_queryset(self):
        id=self.kwargs.get("id")
        return Intership.objects.filter(university_id=id)

class topTen(generics.ListAPIView):
    queryset=Intership.objects.order_by('-stipend')[:10]
    serializer_class=serializerIntership

