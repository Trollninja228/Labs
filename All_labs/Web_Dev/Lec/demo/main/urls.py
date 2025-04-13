from django.urls import path
from main.views import *
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView

urlpatterns=[
    path('timedelta/<int:hours>/',time_delta),
    path('sample_json/',sample_json),
    path('token/', TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path('token/refresh/', TokenRefreshView.as_view(), name="token_refresh"),
    path('protected/', ProtectedView.as_view(), name="protected")
]