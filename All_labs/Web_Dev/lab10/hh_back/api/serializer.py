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

class SerializerVacancyv2(serializers.Serializer):
    id=serializers.IntegerField()
    name=serializers.CharField(max_length=50)
    description=serializers.CharField(max_length=300)
    salary= serializers.FloatField()
    company=serializers.CharField(max_length=300);

    def create(self, validated_data):
        return Vacancy.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.salary = validated_data.get('salary', instance.salary)
        instance.company_id = validated_data.get('company', instance.company_id)
        instance.save()
        return instance