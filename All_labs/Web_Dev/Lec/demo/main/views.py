import datetime
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics,viewsets,status,response
from rest_framework.views import APIView
# Create your views here.




def index(request):
    return HttpResponse('Bye world!')


def time_delta(request, hours):
    result = datetime.now()+datetime.timedelta(hours=hours)
    return HttpResponse(result)
def sample_json(request):
    data={
        "id":"23B031100",
        "name":"John"
    }
    return JsonResponse(data)

class ProtectedPostView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        return response({"message": "POST запрос прошёл, ты авторизован!"})