import datetime
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

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