from django.urls import path
from main.views import sample_json, time_delta


urlpatterns=[
    path('timedelta/<int:hours>/',time_delta),
    path('sample_json/',sample_json),
]