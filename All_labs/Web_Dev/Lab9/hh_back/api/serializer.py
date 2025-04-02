from rest_framework import serializers
from .models import Company,Vacancy

class SerializerCompany(serializers.ModelSerializer):
    class Meta:
        model=Company
        fields='__all__'

class SerializerVacancy(serializers.ModelSerializer):
    class Meta:
        model=Vacancy
        fields='__all__'
