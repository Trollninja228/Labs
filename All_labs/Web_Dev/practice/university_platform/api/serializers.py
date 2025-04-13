from rest_framework import serializers
from .models import *

class serializerUniversity(serializers.ModelSerializer):
    class Meta:
        model=University
        fields="__all__"
    
class serializerIntership(serializers.ModelSerializer):
    class Meta:
        model=Intership
        fields="__all__"    